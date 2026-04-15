
# EntityJsonhalEntityCreate



## Properties

Name | Type
------------ | -------------
`links` | [DefinitionJsonhalDefinitionReadLinks](DefinitionJsonhalDefinitionReadLinks.md)
`slug` | string
`data` | object
`definition` | string
`parent` | string
`_private` | boolean

## Example

```typescript
import type { EntityJsonhalEntityCreate } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "links": null,
  "slug": null,
  "data": null,
  "definition": https://example.com/,
  "parent": null,
  "_private": null,
} satisfies EntityJsonhalEntityCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EntityJsonhalEntityCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


