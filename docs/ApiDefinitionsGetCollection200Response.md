
# ApiDefinitionsGetCollection200Response

definition.jsonhal-definition.read collection.

## Properties

Name | Type
------------ | -------------
`totalItems` | number
`embedded` | { [key: string]: Array&lt;DefinitionJsonhalDefinitionRead&gt;; }
`links` | [HalCollectionBaseSchemaAllOfLinks](HalCollectionBaseSchemaAllOfLinks.md)
`itemsPerPage` | number

## Example

```typescript
import type { ApiDefinitionsGetCollection200Response } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "totalItems": null,
  "embedded": null,
  "links": null,
  "itemsPerPage": null,
} satisfies ApiDefinitionsGetCollection200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiDefinitionsGetCollection200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


