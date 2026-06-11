
# ConstraintViolationJsonld

Unprocessable entity

## Properties

Name | Type
------------ | -------------
`context` | [HydraItemBaseSchemaContext](HydraItemBaseSchemaContext.md)
`id` | string
`type` | string
`status` | number
`violations` | [Array&lt;ConstraintViolationViolationsInner&gt;](ConstraintViolationViolationsInner.md)
`detail` | string
`description` | string
`type` | string
`title` | string
`instance` | string

## Example

```typescript
import type { ConstraintViolationJsonld } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "context": null,
  "id": null,
  "type": null,
  "status": null,
  "violations": null,
  "detail": null,
  "description": null,
  "type": null,
  "title": null,
  "instance": null,
} satisfies ConstraintViolationJsonld

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConstraintViolationJsonld
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


