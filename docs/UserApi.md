# UserApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiUsersIdDelete**](UserApi.md#apiusersiddelete) | **DELETE** /api/users/{id} | Removes the user resource. |
| [**apiUsersIdPatch**](UserApi.md#apiusersidpatch) | **PATCH** /api/users/{id} | Updates the user resource. |
| [**apiUsersPost**](UserApi.md#apiuserspost) | **POST** /api/users | Creates a user resource. |
| [**apiUsersmeGet**](UserApi.md#apiusersmeget) | **GET** /api/users/me | Get current user information |
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
} from 'jsonhub-api-sdk';
import type { ApiUsersIdDeleteRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
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
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | user resource deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersIdPatch

> UserJsonhalUserEmpty apiUsersIdPatch(id, userUserUpdateJsonMergePatch)

Updates the user resource.

Updates the user resource.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-api-sdk';
import type { ApiUsersIdPatchRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string | user identifier
    id: id_example,
    // UserUserUpdateJsonMergePatch | The updated user resource
    userUserUpdateJsonMergePatch: ...,
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
| **userUserUpdateJsonMergePatch** | [UserUserUpdateJsonMergePatch](UserUserUpdateJsonMergePatch.md) | The updated user resource | |

### Return type

[**UserJsonhalUserEmpty**](UserJsonhalUserEmpty.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/merge-patch+json`, `application/vnd.api+json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | user resource updated |  -  |
| **400** | Invalid input |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersPost

> UserJsonhalUserRead apiUsersPost(userJsonhalUserCreate)

Creates a user resource.

Creates a user resource.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-api-sdk';
import type { ApiUsersPostRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonhalUserCreate | The new user resource
    userJsonhalUserCreate: ...,
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
| **userJsonhalUserCreate** | [UserJsonhalUserCreate](UserJsonhalUserCreate.md) | The new user resource | |

### Return type

[**UserJsonhalUserRead**](UserJsonhalUserRead.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/hal+json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | user resource created |  -  |
| **400** | Invalid input |  -  |
| **422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersmeGet

> ApiUsersmeGet200Response apiUsersmeGet()

Get current user information

Returns quota usage and limits for the authenticated user.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-api-sdk';
import type { ApiUsersmeGetRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.apiUsersmeGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiUsersmeGet200Response**](ApiUsersmeGet200Response.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current user quota usage. |  -  |
| **401** | Authentication required. |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersresendActivationPost

> UserJsonhal apiUsersresendActivationPost(userJsonhalUserResendActivation)

Resend activation email

This endpoint resends the activation email to the user.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-api-sdk';
import type { ApiUsersresendActivationPostRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonhalUserResendActivation | The new user resource
    userJsonhalUserResendActivation: ...,
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
| **userJsonhalUserResendActivation** | [UserJsonhalUserResendActivation](UserJsonhalUserResendActivation.md) | The new user resource | |

### Return type

[**UserJsonhal**](UserJsonhal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/hal+json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersresetPasswordPost

> UserJsonhalUserEmpty apiUsersresetPasswordPost(userJsonhalUserResetPassword)

Reset password (with token)

This endpoint resets the password of the user using the token sent by email.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-api-sdk';
import type { ApiUsersresetPasswordPostRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonhalUserResetPassword | The new user resource
    userJsonhalUserResetPassword: ...,
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
| **userJsonhalUserResetPassword** | [UserJsonhalUserResetPassword](UserJsonhalUserResetPassword.md) | The new user resource | |

### Return type

[**UserJsonhalUserEmpty**](UserJsonhalUserEmpty.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/hal+json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUserssendResetPasswordPost

> UserJsonhal apiUserssendResetPasswordPost(userJsonhalUserSendResetPassword)

Send reset password email

This endpoint sends a reset password email to the user.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-api-sdk';
import type { ApiUserssendResetPasswordPostRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new UserApi();

  const body = {
    // UserJsonhalUserSendResetPassword | The new user resource
    userJsonhalUserSendResetPassword: ...,
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
| **userJsonhalUserSendResetPassword** | [UserJsonhalUserSendResetPassword](UserJsonhalUserSendResetPassword.md) | The new user resource | |

### Return type

[**UserJsonhal**](UserJsonhal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/hal+json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

