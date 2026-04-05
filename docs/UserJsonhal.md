
# UserJsonhal



## Properties

Name | Type
------------ | -------------
`links` | [DefinitionJsonhalDefinitionReadLinks](DefinitionJsonhalDefinitionReadLinks.md)
`id` | string
`email` | string
`password` | string
`oldPassword` | string
`token` | string
`resetPasswordLink` | string
`activationUrl` | string

## Example

```typescript
import type { UserJsonhal } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "links": null,
  "id": null,
  "email": null,
  "password": null,
  "oldPassword": null,
  "token": null,
  "resetPasswordLink": null,
  "activationUrl": null,
} satisfies UserJsonhal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserJsonhal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


