#!/usr/bin/env node
"use strict";

// Reads package.json once and checks the two invariants the release pipeline
// (jh-client-generator's write-package-metadata.mjs) is supposed to have
// already guaranteed before tagging: the version matches the tag exactly, and
// a Source API Version was recorded. A mismatch here means something upstream
// broke, and publishing on top of that would ship a lie.

const { readFileSync } = require("node:fs");
const path = require("node:path");

const tag = process.env.GITHUB_REF_NAME;
if (!tag) {
  console.error("GITHUB_REF_NAME is not set.");
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(path.resolve(__dirname, "..", "..", "package.json"), "utf8"));

const tagVersion = tag.replace(/^v/, "");
if (tagVersion !== pkg.version) {
  console.error(`Tag ${tag} does not match package.json version ${pkg.version}.`);
  process.exit(1);
}

if (typeof pkg.sourceApiVersion !== "string" || pkg.sourceApiVersion.trim() === "") {
  console.error("package.json is missing a non-empty sourceApiVersion.");
  process.exit(1);
}

console.log(`package.json version ${pkg.version} matches tag ${tag}; sourceApiVersion is "${pkg.sourceApiVersion}".`);
