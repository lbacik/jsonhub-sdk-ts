
# ApiDefinitionsGetCollection200Response


## Properties

Name | Type
------------ | -------------
`embedded` | [ApiDefinitionsGetCollection200ResponseEmbedded](ApiDefinitionsGetCollection200ResponseEmbedded.md)
`totalItems` | number
`itemsPerPage` | number
`links` | [ApiDefinitionsGetCollection200ResponseLinks](ApiDefinitionsGetCollection200ResponseLinks.md)

## Example

```typescript
import type { ApiDefinitionsGetCollection200Response } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "embedded": null,
  "totalItems": null,
  "itemsPerPage": null,
  "links": null,
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


