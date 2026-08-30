
# Oauth2Jwks200ResponseKeysInner


## Properties

Name | Type
------------ | -------------
`kty` | string
`use` | string
`kid` | string
`alg` | string
`n` | string
`e` | string

## Example

```typescript
import type { Oauth2Jwks200ResponseKeysInner } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "kty": RSA,
  "use": sig,
  "kid": null,
  "alg": RS256,
  "n": null,
  "e": null,
} satisfies Oauth2Jwks200ResponseKeysInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Oauth2Jwks200ResponseKeysInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


