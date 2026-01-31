/* tslint:disable */
/* eslint-disable */

export type string = string;

export function instanceOfstring(value: any): value is string {
  return typeof value === "string";
}

export function stringFromJSON(json: any): string {
  return stringFromJSONTyped(json, false);
}

export function stringFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean
): string {
  return json as string;
}

export function stringToJSON(value?: string | null): any {
  return value as any;
}
