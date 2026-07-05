
# Oauth2Register201Response


## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientSecret` | string
`redirectUris` | Array&lt;string&gt;
`grantTypes` | Array&lt;string&gt;
`responseTypes` | Array&lt;string&gt;
`scope` | string
`tokenEndpointAuthMethod` | string

## Example

```typescript
import type { Oauth2Register201Response } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "clientId": jh_client_id,
  "clientSecret": null,
  "redirectUris": null,
  "grantTypes": [authorization_code],
  "responseTypes": [code],
  "scope": idea-forge-mcp,
  "tokenEndpointAuthMethod": none,
} satisfies Oauth2Register201Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Oauth2Register201Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


