
# ConstraintViolationViolationsInner


## Properties

Name | Type
------------ | -------------
`propertyPath` | string
`message` | string
`code` | string
`hint` | string
`payload` | { [key: string]: any; }

## Example

```typescript
import type { ConstraintViolationViolationsInner } from 'jsonhub-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "propertyPath": null,
  "message": null,
  "code": null,
  "hint": null,
  "payload": null,
} satisfies ConstraintViolationViolationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConstraintViolationViolationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


