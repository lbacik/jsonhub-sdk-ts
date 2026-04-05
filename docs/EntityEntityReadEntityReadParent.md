
# EntityEntityReadEntityReadParent



## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`data` | object
`definition` | [DefinitionEntityReadEntityReadParent](DefinitionEntityReadEntityReadParent.md)
`parent` | string
`_private` | boolean
`isOwnedByCurrentUser` | boolean

## Example

```typescript
import type { EntityEntityReadEntityReadParent } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "data": null,
  "definition": null,
  "parent": null,
  "_private": null,
  "isOwnedByCurrentUser": null,
} satisfies EntityEntityReadEntityReadParent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EntityEntityReadEntityReadParent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


