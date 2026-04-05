
# UserUserCreate

Create user

## Properties

Name | Type
------------ | -------------
`email` | string
`password` | string
`activationUrl` | string

## Example

```typescript
import type { UserUserCreate } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "password": null,
  "activationUrl": null,
} satisfies UserUserCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserUserCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


