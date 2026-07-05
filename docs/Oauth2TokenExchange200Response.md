
# Oauth2TokenExchange200Response


## Properties

Name | Type
------------ | -------------
`accessToken` | string
`tokenType` | string
`expiresIn` | number
`scope` | string
`issuedTokenType` | string

## Example

```typescript
import type { Oauth2TokenExchange200Response } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "accessToken": null,
  "tokenType": Bearer,
  "expiresIn": 300,
  "scope": jsonhub:entities:write jsonhub:definitions:write,
  "issuedTokenType": urn:ietf:params:oauth:token-type:access_token,
} satisfies Oauth2TokenExchange200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Oauth2TokenExchange200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


