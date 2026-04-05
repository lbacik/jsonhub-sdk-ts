
# ApiDefinitionsGetCollection200Response1


## Properties

Name | Type
------------ | -------------
`embedded` | [ApiDefinitionsGetCollection200Response1Embedded](ApiDefinitionsGetCollection200Response1Embedded.md)
`totalItems` | number
`itemsPerPage` | number
`links` | [ApiDefinitionsGetCollection200Response1Links](ApiDefinitionsGetCollection200Response1Links.md)

## Example

```typescript
import type { ApiDefinitionsGetCollection200Response1 } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "embedded": null,
  "totalItems": null,
  "itemsPerPage": null,
  "links": null,
} satisfies ApiDefinitionsGetCollection200Response1

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiDefinitionsGetCollection200Response1
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


