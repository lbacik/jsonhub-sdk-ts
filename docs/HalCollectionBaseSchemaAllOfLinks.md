
# HalCollectionBaseSchemaAllOfLinks


## Properties

Name | Type
------------ | -------------
`first` | [HalCollectionBaseSchemaAllOfLinksFirst](HalCollectionBaseSchemaAllOfLinksFirst.md)
`last` | [HalCollectionBaseSchemaAllOfLinksFirst](HalCollectionBaseSchemaAllOfLinksFirst.md)
`next` | [HalCollectionBaseSchemaAllOfLinksFirst](HalCollectionBaseSchemaAllOfLinksFirst.md)
`previous` | [HalCollectionBaseSchemaAllOfLinksFirst](HalCollectionBaseSchemaAllOfLinksFirst.md)

## Example

```typescript
import type { HalCollectionBaseSchemaAllOfLinks } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "first": null,
  "last": null,
  "next": null,
  "previous": null,
} satisfies HalCollectionBaseSchemaAllOfLinks

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HalCollectionBaseSchemaAllOfLinks
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


