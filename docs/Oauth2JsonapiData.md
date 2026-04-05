
# Oauth2JsonapiData


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`attributes` | [Oauth2JsonapiDataAttributes](Oauth2JsonapiDataAttributes.md)

## Example

```typescript
import type { Oauth2JsonapiData } from 'jsonhub-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "attributes": null,
} satisfies Oauth2JsonapiData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Oauth2JsonapiData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


