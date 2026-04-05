
# UserJsonhalUserResetPassword



## Properties

Name | Type
------------ | -------------
`links` | [DefinitionJsonhalDefinitionReadLinks](DefinitionJsonhalDefinitionReadLinks.md)
`password` | string
`token` | string

## Example

```typescript
import type { UserJsonhalUserResetPassword } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "links": null,
  "password": null,
  "token": null,
} satisfies UserJsonhalUserResetPassword

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserJsonhalUserResetPassword
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


