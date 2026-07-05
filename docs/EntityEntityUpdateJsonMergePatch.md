
# EntityEntityUpdateJsonMergePatch


## Properties

Name | Type
------------ | -------------
`slug` | string
`data` | object
`parent` | string
`_private` | boolean

## Example

```typescript
import type { EntityEntityUpdateJsonMergePatch } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "slug": null,
  "data": null,
  "parent": null,
  "_private": null,
} satisfies EntityEntityUpdateJsonMergePatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EntityEntityUpdateJsonMergePatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


