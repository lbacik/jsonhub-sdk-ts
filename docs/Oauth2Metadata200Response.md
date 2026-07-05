
# Oauth2Metadata200Response


## Properties

Name | Type
------------ | -------------
`issuer` | string
`authorizationEndpoint` | string
`tokenEndpoint` | string
`jwksUri` | string
`registrationEndpoint` | string
`revocationEndpoint` | string
`tokenExchangeEndpoint` | string
`responseTypesSupported` | Array&lt;string&gt;
`grantTypesSupported` | Array&lt;string&gt;
`codeChallengeMethodsSupported` | Array&lt;string&gt;
`scopesSupported` | Array&lt;string&gt;

## Example

```typescript
import type { Oauth2Metadata200Response } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "issuer": https://jsonhub.example,
  "authorizationEndpoint": https://jsonhub.example/oauth2/authorize,
  "tokenEndpoint": https://jsonhub.example/oauth2/token,
  "jwksUri": https://jsonhub.example/oauth2/jwks,
  "registrationEndpoint": https://jsonhub.example/oauth2/register,
  "revocationEndpoint": https://jsonhub.example/oauth2/revoke,
  "tokenExchangeEndpoint": https://jsonhub.example/oauth2/token-exchange,
  "responseTypesSupported": ["code"],
  "grantTypesSupported": ["authorization_code","urn:ietf:params:oauth:grant-type:token-exchange"],
  "codeChallengeMethodsSupported": ["S256"],
  "scopesSupported": ["idea-forge-mcp"],
} satisfies Oauth2Metadata200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Oauth2Metadata200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


