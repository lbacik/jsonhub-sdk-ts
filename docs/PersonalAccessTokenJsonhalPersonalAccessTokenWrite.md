
# PersonalAccessTokenJsonhalPersonalAccessTokenWrite


## Properties

Name | Type
------------ | -------------
`name` | string
`expiresAt` | Date
`links` | [HalCollectionBaseSchemaNoPaginationLinks](HalCollectionBaseSchemaNoPaginationLinks.md)

## Example

```typescript
import type { PersonalAccessTokenJsonhalPersonalAccessTokenWrite } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "expiresAt": null,
  "links": null,
} satisfies PersonalAccessTokenJsonhalPersonalAccessTokenWrite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonalAccessTokenJsonhalPersonalAccessTokenWrite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


