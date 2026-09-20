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
- **Accept**: `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | user resource deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersIdPatch

> UserJsonhalUserEmpty apiUsersIdPatch(id, userUserUpdateJsonMergePatch, accept)

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
    // UserUserUpdateJsonMergePatch | The updated user resource
    userUserUpdateJsonMergePatch: ...,
    // string (optional)
    accept: accept_example,
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
| **accept** | `string` |  | [Optional] [Defaults to `&#39;application/hal+json&#39;`] |

### Return type

[**UserJsonhalUserEmpty**](UserJsonhalUserEmpty.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/merge-patch+json`
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

> UserJsonhalUserRead apiUsersPost(userUserCreate, accept)

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
    // UserUserCreate | The new user resource
    userUserCreate: ...,
    // string (optional)
    accept: accept_example,
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
| **userUserCreate** | [UserUserCreate](UserUserCreate.md) | The new user resource | |
| **accept** | `string` |  | [Optional] [Defaults to `&#39;application/hal+json&#39;`] |

### Return type

[**UserJsonhalUserRead**](UserJsonhalUserRead.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | user resource created |  -  |
| **400** | Invalid input |  -  |
| **422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersmeGet

> ApiUsersmeGet200Response apiUsersmeGet(accept)

Get current user information

Returns the authenticated user\&#39;s account id, email, and quota usage and limits. &#x60;email&#x60; is returned regardless of token scope for now; see #45, after which it will require a scope covering profile access instead of being disclosed to every token holder.

### Example

```ts
import {
  Configuration,
  UserApi,
} from 'jsonhub-sdk';
import type { ApiUsersmeGetRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string (optional)
    accept: accept_example,
  } satisfies ApiUsersmeGetRequest;

  try {
    const data = await api.apiUsersmeGet(body);
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
| **accept** | `string` |  | [Optional] [Defaults to `&#39;application/json&#39;`] |

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
| **200** | Current user identity and quota usage. |  -  |
| **401** | Authentication required. |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersresendActivationPost

> UserJsonhal apiUsersresendActivationPost(userUserResendActivation, accept)

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
    // UserUserResendActivation | The new user resource
    userUserResendActivation: ...,
    // string (optional)
    accept: accept_example,
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
| **userUserResendActivation** | [UserUserResendActivation](UserUserResendActivation.md) | The new user resource | |
| **accept** | `string` |  | [Optional] [Defaults to `&#39;application/hal+json&#39;`] |

### Return type

[**UserJsonhal**](UserJsonhal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsersresetPasswordPost

> UserJsonhalUserEmpty apiUsersresetPasswordPost(userUserResetPassword, accept)

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
    // UserUserResetPassword | The new user resource
    userUserResetPassword: ...,
    // string (optional)
    accept: accept_example,
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
| **userUserResetPassword** | [UserUserResetPassword](UserUserResetPassword.md) | The new user resource | |
| **accept** | `string` |  | [Optional] [Defaults to `&#39;application/hal+json&#39;`] |

### Return type

[**UserJsonhalUserEmpty**](UserJsonhalUserEmpty.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUserssendResetPasswordPost

> UserJsonhal apiUserssendResetPasswordPost(userUserSendResetPassword, accept)

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
    // UserUserSendResetPassword | The new user resource
    userUserSendResetPassword: ...,
    // string (optional)
    accept: accept_example,
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
| **userUserSendResetPassword** | [UserUserSendResetPassword](UserUserSendResetPassword.md) | The new user resource | |
| **accept** | `string` |  | [Optional] [Defaults to `&#39;application/hal+json&#39;`] |

### Return type

[**UserJsonhal**](UserJsonhal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

