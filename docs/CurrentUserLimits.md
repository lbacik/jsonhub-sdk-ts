
# CurrentUserLimits


## Properties

Name | Type
------------ | -------------
`entities` | [CurrentUserLimitUsage](CurrentUserLimitUsage.md)
`privateEntities` | [CurrentUserLimitUsage](CurrentUserLimitUsage.md)
`definitions` | [CurrentUserLimitUsage](CurrentUserLimitUsage.md)

## Example

```typescript
import type { CurrentUserLimits } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "entities": null,
  "privateEntities": null,
  "definitions": null,
} satisfies CurrentUserLimits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CurrentUserLimits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


