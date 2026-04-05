
# DefinitionJsonapi



## Properties

Name | Type
------------ | -------------
`data` | [DefinitionJsonapiData](DefinitionJsonapiData.md)
`parentEntity` | [EntityJsonapi](EntityJsonapi.md)
`isOwnedByCurrentUser` | boolean

## Example

```typescript
import type { DefinitionJsonapi } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "parentEntity": null,
  "isOwnedByCurrentUser": null,
} satisfies DefinitionJsonapi

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DefinitionJsonapi
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


