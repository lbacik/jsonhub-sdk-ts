
# Oauth2RegisterRequest


## Properties

Name | Type
------------ | -------------
`clientName` | string
`redirectUris` | Array&lt;string&gt;
`grantTypes` | Array&lt;string&gt;
`responseTypes` | Array&lt;string&gt;
`scope` | string
`tokenEndpointAuthMethod` | string

## Example

```typescript
import type { Oauth2RegisterRequest } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "clientName": ChatGPT Idea Forge MCP,
  "redirectUris": ["https://chat.openai.com/aip/g-abc/oauth/callback"],
  "grantTypes": ["authorization_code"],
  "responseTypes": [code],
  "scope": idea-forge-mcp,
  "tokenEndpointAuthMethod": none,
} satisfies Oauth2RegisterRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Oauth2RegisterRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


