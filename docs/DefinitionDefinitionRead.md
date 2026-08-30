
# DefinitionDefinitionRead


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`jsonSchema` | object
`parentEntity` | [EntityDefinitionRead](EntityDefinitionRead.md)
`isOwnedByCurrentUser` | boolean

## Example

```typescript
import type { DefinitionDefinitionRead } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "jsonSchema": null,
  "parentEntity": null,
  "isOwnedByCurrentUser": null,
} satisfies DefinitionDefinitionRead

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DefinitionDefinitionRead
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


