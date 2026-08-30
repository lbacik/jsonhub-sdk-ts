
# HalCollectionBaseSchemaNoPagination


## Properties

Name | Type
------------ | -------------
`totalItems` | number
`embedded` | [HalCollectionBaseSchemaNoPaginationEmbedded](HalCollectionBaseSchemaNoPaginationEmbedded.md)
`links` | [HalCollectionBaseSchemaNoPaginationLinks](HalCollectionBaseSchemaNoPaginationLinks.md)

## Example

```typescript
import type { HalCollectionBaseSchemaNoPagination } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "totalItems": null,
  "embedded": null,
  "links": null,
} satisfies HalCollectionBaseSchemaNoPagination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HalCollectionBaseSchemaNoPagination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


