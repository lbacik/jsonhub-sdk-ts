
# ApiDefinitionsGetCollection200ResponseLinks


## Properties

Name | Type
------------ | -------------
`self` | [ApiDefinitionsGetCollection200ResponseLinksSelf](ApiDefinitionsGetCollection200ResponseLinksSelf.md)
`first` | [ApiDefinitionsGetCollection200ResponseLinksSelf](ApiDefinitionsGetCollection200ResponseLinksSelf.md)
`last` | [ApiDefinitionsGetCollection200ResponseLinksSelf](ApiDefinitionsGetCollection200ResponseLinksSelf.md)
`next` | [ApiDefinitionsGetCollection200ResponseLinksSelf](ApiDefinitionsGetCollection200ResponseLinksSelf.md)
`previous` | [ApiDefinitionsGetCollection200ResponseLinksSelf](ApiDefinitionsGetCollection200ResponseLinksSelf.md)

## Example

```typescript
import type { ApiDefinitionsGetCollection200ResponseLinks } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "self": null,
  "first": null,
  "last": null,
  "next": null,
  "previous": null,
} satisfies ApiDefinitionsGetCollection200ResponseLinks

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiDefinitionsGetCollection200ResponseLinks
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


