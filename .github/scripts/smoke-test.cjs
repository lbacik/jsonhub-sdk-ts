#!/usr/bin/env node
"use strict";

// Exercises the built package the way a real consumer would, gating `npm
// publish` on it: packs it with `npm pack`, installs the tarball into a
// scratch project, and requires it from there. A broken SDK Release can't be
// unpublished cleanly, so this is the check that stands between a build
// mistake (wrong "main"/"types", a file missing from the tarball, a
// CJS/ESM mismatch) and the registry.
//
// The assertions stay generic across every future SDK Surface (new
// operations, new models): they only check the shape every
// typescript-fetch client has - a Configuration constructor and at least
// one *Api class whose instances expose methods - never a specific
// operation or model name, since those change with the API itself.

const { execFileSync } = require("node:child_process");
const { mkdtempSync, readFileSync, rmSync } = require("node:fs");
const { tmpdir } = require("node:os");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..", "..");
const pkg = JSON.parse(readFileSync(path.join(repoRoot, "package.json"), "utf8"));

console.log(`Packing ${pkg.name}@${pkg.version}...`);
const packOutput = execFileSync("npm", ["pack", "--json"], { cwd: repoRoot, encoding: "utf8" });
const [{ filename }] = JSON.parse(packOutput);
const tarballPath = path.join(repoRoot, filename);

const projectDir = mkdtempSync(path.join(tmpdir(), "jsonhub-sdk-ts-smoke-"));

const checkScript = `
const mod = require(${JSON.stringify(pkg.name)});
const exportNames = Object.keys(mod);
if (exportNames.length === 0) {
  throw new Error("Package exports nothing.");
}

if (typeof mod.Configuration !== "function") {
  throw new Error('Expected the "Configuration" export to be a constructor.');
}
const configuration = new mod.Configuration({ basePath: "https://example.invalid" });

const apiClassNames = exportNames.filter((name) => name.endsWith("Api") && typeof mod[name] === "function");
if (apiClassNames.length === 0) {
  throw new Error("Expected at least one generated *Api class to be exported.");
}

for (const name of apiClassNames) {
  const instance = new mod[name](configuration);
  const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).filter(
    (member) => member !== "constructor"
  );
  if (methodNames.length === 0) {
    throw new Error(\`Expected \${name} to expose at least one method.\`);
  }
}

console.log(\`Smoke test passed: \${exportNames.length} exports, \${apiClassNames.length} API classes instantiate correctly (\${apiClassNames.join(", ")}).\`);
`;

try {
  console.log(`Installing the packed tarball into a fresh project at ${projectDir}...`);
  execFileSync("npm", ["init", "--yes"], { cwd: projectDir, stdio: "ignore" });
  execFileSync("npm", ["install", tarballPath], { cwd: projectDir, stdio: "inherit" });
  execFileSync("node", ["-e", checkScript], { cwd: projectDir, stdio: "inherit" });
} finally {
  rmSync(tarballPath, { force: true });
  rmSync(projectDir, { recursive: true, force: true });
}
