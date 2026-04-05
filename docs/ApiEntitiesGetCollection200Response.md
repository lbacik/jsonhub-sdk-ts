
# ApiEntitiesGetCollection200Response


## Properties

Name | Type
------------ | -------------
`hydraMember` | [Array&lt;EntityJsonldEntityReadEntityReadParent&gt;](EntityJsonldEntityReadEntityReadParent.md)
`hydraTotalItems` | number
`hydraView` | [ApiDefinitionsGetCollection200ResponseHydraView](ApiDefinitionsGetCollection200ResponseHydraView.md)
`hydraSearch` | [ApiDefinitionsGetCollection200ResponseHydraSearch](ApiDefinitionsGetCollection200ResponseHydraSearch.md)

## Example

```typescript
import type { ApiEntitiesGetCollection200Response } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "hydraMember": null,
  "hydraTotalItems": null,
  "hydraView": null,
  "hydraSearch": null,
} satisfies ApiEntitiesGetCollection200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiEntitiesGetCollection200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


