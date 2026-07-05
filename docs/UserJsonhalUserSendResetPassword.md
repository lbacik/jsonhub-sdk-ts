
# UserJsonhalUserSendResetPassword


## Properties

Name | Type
------------ | -------------
`email` | string
`resetPasswordLink` | string
`links` | [HalCollectionBaseSchemaNoPaginationLinks](HalCollectionBaseSchemaNoPaginationLinks.md)

## Example

```typescript
import type { UserJsonhalUserSendResetPassword } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "resetPasswordLink": null,
  "links": null,
} satisfies UserJsonhalUserSendResetPassword

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserJsonhalUserSendResetPassword
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


