
# ErrorJsonld

A representation of common errors.

## Properties

Name | Type
------------ | -------------
`context` | [HydraItemBaseSchemaContext](HydraItemBaseSchemaContext.md)
`id` | string
`type` | string
`title` | string
`detail` | string
`status` | number
`instance` | string
`type` | string
`description` | string

## Example

```typescript
import type { ErrorJsonld } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "context": null,
  "id": null,
  "type": null,
  "title": null,
  "detail": null,
  "status": null,
  "instance": null,
  "type": null,
  "description": null,
} satisfies ErrorJsonld

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorJsonld
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


