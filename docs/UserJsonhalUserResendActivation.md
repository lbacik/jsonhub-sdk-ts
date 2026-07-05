
# UserJsonhalUserResendActivation


## Properties

Name | Type
------------ | -------------
`email` | string
`activationUrl` | string
`links` | [HalCollectionBaseSchemaNoPaginationLinks](HalCollectionBaseSchemaNoPaginationLinks.md)

## Example

```typescript
import type { UserJsonhalUserResendActivation } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "activationUrl": null,
  "links": null,
} satisfies UserJsonhalUserResendActivation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserJsonhalUserResendActivation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


