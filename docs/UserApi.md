# UserApi

All URIs are relative to *http://api.jsonhub.orb.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiUsersIdDelete**](UserApi.md#apiusersiddelete) | **DELETE** /api/users/{id} | Removes the user resource. |
| [**apiUsersIdPatch**](UserApi.md#apiusersidpatch) | **PATCH** /api/users/{id} | Updates the user resource. |
| [**apiUsersPost**](UserApi.md#apiuserspost) | **POST** /api/users | Creates a user resource. |
| [**apiUsersresendActivationPost**](UserApi.md#apiusersresendactivationpost) | **POST** /api/users/resend-activation | Resend activation email |
| [**apiUsersresetPasswordPost**](UserApi.md#apiusersresetpasswordpost) | **POST** /api/users/reset-password | Reset password (with token) |
| [**apiUserssendResetPasswordPost**](UserApi.md#apiuserssendresetpasswordpost) | **POST** /api/users/send-reset-password | Send reset password email |



## apiUsersIdDelete

> apiUsersIdDelete(id)

Removes the user resource.

Removes the user resource.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-sdk';
import type { ApiUsersIdDeleteRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string | user identifier
    id: id_example,
  } satisfies ApiUsersIdDeleteRequest;

  try {
    const data = await api.apiUsersIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | user identifier | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | user resource deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersIdPatch

> UserJsonldUserEmpty apiUsersIdPatch(id, userUserUpdate)

Updates the user resource.

Updates the user resource.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-sdk';
import type { ApiUsersIdPatchRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string | user identifier
    id: id_example,
    // UserUserUpdate | The updated user resource
    userUserUpdate: ...,
  } satisfies ApiUsersIdPatchRequest;

  try {
    const data = await api.apiUsersIdPatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | user identifier | [Defaults to `undefined`] |
| **userUserUpdate** | [UserUserUpdate](UserUserUpdate.md) | The updated user resource | |

### Return type

[**UserJsonldUserEmpty**](UserJsonldUserEmpty.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/merge-patch+json`, `application/vnd.api+json`
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | user resource updated |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersPost

> UserJsonldUserRead apiUsersPost(userJsonldUserCreate)

Creates a user resource.

Creates a user resource.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-sdk';
import type { ApiUsersPostRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonldUserCreate | The new user resource
    userJsonldUserCreate: ...,
  } satisfies ApiUsersPostRequest;

  try {
    const data = await api.apiUsersPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userJsonldUserCreate** | [UserJsonldUserCreate](UserJsonldUserCreate.md) | The new user resource | |

### Return type

[**UserJsonldUserRead**](UserJsonldUserRead.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | user resource created |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersresendActivationPost

> apiUsersresendActivationPost(userJsonldUserResendActivation)

Resend activation email

This endpoint resends the activation email to the user.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-sdk';
import type { ApiUsersresendActivationPostRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonldUserResendActivation | The new user resource
    userJsonldUserResendActivation: ...,
  } satisfies ApiUsersresendActivationPostRequest;

  try {
    const data = await api.apiUsersresendActivationPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userJsonldUserResendActivation** | [UserJsonldUserResendActivation](UserJsonldUserResendActivation.md) | The new user resource | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersresetPasswordPost

> apiUsersresetPasswordPost(userJsonldUserResetPassword)

Reset password (with token)

This endpoint resets the password of the user using the token sent by email.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-sdk';
import type { ApiUsersresetPasswordPostRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonldUserResetPassword | The new user resource
    userJsonldUserResetPassword: ...,
  } satisfies ApiUsersresetPasswordPostRequest;

  try {
    const data = await api.apiUsersresetPasswordPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userJsonldUserResetPassword** | [UserJsonldUserResetPassword](UserJsonldUserResetPassword.md) | The new user resource | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUserssendResetPasswordPost

> apiUserssendResetPasswordPost(userJsonldUserSendResetPassword)

Send reset password email

This endpoint sends a reset password email to the user.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-sdk';
import type { ApiUserssendResetPasswordPostRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonldUserSendResetPassword | The new user resource
    userJsonldUserSendResetPassword: ...,
  } satisfies ApiUserssendResetPasswordPostRequest;

  try {
    const data = await api.apiUserssendResetPasswordPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userJsonldUserSendResetPassword** | [UserJsonldUserSendResetPassword](UserJsonldUserSendResetPassword.md) | The new user resource | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

