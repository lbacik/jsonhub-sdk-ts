
# DefinitionJsonhalDefinitionWrite


## Properties

Name | Type
------------ | -------------
`slug` | string
`jsonSchema` | object
`parentEntity` | string
`links` | [HalCollectionBaseSchemaNoPaginationLinks](HalCollectionBaseSchemaNoPaginationLinks.md)

## Example

```typescript
import type { DefinitionJsonhalDefinitionWrite } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "slug": null,
  "jsonSchema": null,
  "parentEntity": https://example.com/,
  "links": null,
} satisfies DefinitionJsonhalDefinitionWrite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DefinitionJsonhalDefinitionWrite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


