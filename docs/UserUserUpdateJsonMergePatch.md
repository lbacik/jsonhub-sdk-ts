
# UserUserUpdateJsonMergePatch

Change user password

## Properties

Name | Type
------------ | -------------
`password` | string
`oldPassword` | string

## Example

```typescript
import type { UserUserUpdateJsonMergePatch } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "password": null,
  "oldPassword": null,
} satisfies UserUserUpdateJsonMergePatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserUserUpdateJsonMergePatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


