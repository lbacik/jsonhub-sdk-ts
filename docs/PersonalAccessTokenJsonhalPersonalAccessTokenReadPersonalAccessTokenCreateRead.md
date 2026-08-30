
# PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`tokenPreview` | string
`token` | string
`expiresAt` | Date
`createdAt` | Date
`links` | [HalCollectionBaseSchemaNoPaginationLinks](HalCollectionBaseSchemaNoPaginationLinks.md)

## Example

```typescript
import type { PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead } from 'jsonhub-sdk-ts'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "tokenPreview": null,
  "token": null,
  "expiresAt": null,
  "createdAt": null,
  "links": null,
} satisfies PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


