# PersonalAccessTokenApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiMeapiTokensGetCollection**](PersonalAccessTokenApi.md#apimeapitokensgetcollection) | **GET** /api/me/api-tokens | Retrieves the collection of personal access token resources. |
| [**apiMeapiTokensIdDelete**](PersonalAccessTokenApi.md#apimeapitokensiddelete) | **DELETE** /api/me/api-tokens/{id} | Removes the personal access token resource. |
| [**apiMeapiTokensIdPatch**](PersonalAccessTokenApi.md#apimeapitokensidpatch) | **PATCH** /api/me/api-tokens/{id} | Updates the personal access token resource. |
| [**apiMeapiTokensPost**](PersonalAccessTokenApi.md#apimeapitokenspost) | **POST** /api/me/api-tokens | Creates a personal access token resource. |



## apiMeapiTokensGetCollection

> ApiMeapiTokensGetCollection200Response apiMeapiTokensGetCollection(page, limit)

Retrieves the collection of personal access token resources.

Retrieves the collection of personal access token resources.

### Example

```ts
import {
  Configuration,
  PersonalAccessTokenApi,
} from 'jsonhub-api-sdk';
import type { ApiMeapiTokensGetCollectionRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PersonalAccessTokenApi(config);

  const body = {
    // number | The collection page number (optional)
    page: 56,
    // number | The number of items per page (optional)
    limit: 56,
  } satisfies ApiMeapiTokensGetCollectionRequest;

  try {
    const data = await api.apiMeapiTokensGetCollection(body);
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
| **page** | `number` | The collection page number | [Optional] [Defaults to `1`] |
| **limit** | `number` | The number of items per page | [Optional] [Defaults to `30`] |

### Return type

[**ApiMeapiTokensGetCollection200Response**](ApiMeapiTokensGetCollection200Response.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | personal access token collection |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMeapiTokensIdDelete

> apiMeapiTokensIdDelete(id)

Removes the personal access token resource.

Removes the personal access token resource.

### Example

```ts
import {
  Configuration,
  PersonalAccessTokenApi,
} from 'jsonhub-api-sdk';
import type { ApiMeapiTokensIdDeleteRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PersonalAccessTokenApi(config);

  const body = {
    // string | personal access token identifier
    id: id_example,
  } satisfies ApiMeapiTokensIdDeleteRequest;

  try {
    const data = await api.apiMeapiTokensIdDelete(body);
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
| **id** | `string` | personal access token identifier | [Defaults to `undefined`] |

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
| **204** | personal access token resource deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMeapiTokensIdPatch

> PersonalAccessTokenJsonhalPersonalAccessTokenRead apiMeapiTokensIdPatch(id, personalAccessTokenPersonalAccessTokenWriteJsonMergePatch)

Updates the personal access token resource.

Updates the personal access token resource.

### Example

```ts
import {
  Configuration,
  PersonalAccessTokenApi,
} from 'jsonhub-api-sdk';
import type { ApiMeapiTokensIdPatchRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PersonalAccessTokenApi(config);

  const body = {
    // string | personal access token identifier
    id: id_example,
    // PersonalAccessTokenPersonalAccessTokenWriteJsonMergePatch | The updated personal access token resource
    personalAccessTokenPersonalAccessTokenWriteJsonMergePatch: ...,
  } satisfies ApiMeapiTokensIdPatchRequest;

  try {
    const data = await api.apiMeapiTokensIdPatch(body);
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
| **id** | `string` | personal access token identifier | [Defaults to `undefined`] |
| **personalAccessTokenPersonalAccessTokenWriteJsonMergePatch** | [PersonalAccessTokenPersonalAccessTokenWriteJsonMergePatch](PersonalAccessTokenPersonalAccessTokenWriteJsonMergePatch.md) | The updated personal access token resource | |

### Return type

[**PersonalAccessTokenJsonhalPersonalAccessTokenRead**](PersonalAccessTokenJsonhalPersonalAccessTokenRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/merge-patch+json`, `application/vnd.api+json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | personal access token resource updated |  -  |
| **400** | Invalid input |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiMeapiTokensPost

> PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead apiMeapiTokensPost(personalAccessTokenJsonhalPersonalAccessTokenWrite)

Creates a personal access token resource.

Creates a personal access token resource.

### Example

```ts
import {
  Configuration,
  PersonalAccessTokenApi,
} from 'jsonhub-api-sdk';
import type { ApiMeapiTokensPostRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PersonalAccessTokenApi(config);

  const body = {
    // PersonalAccessTokenJsonhalPersonalAccessTokenWrite | The new personal access token resource
    personalAccessTokenJsonhalPersonalAccessTokenWrite: ...,
  } satisfies ApiMeapiTokensPostRequest;

  try {
    const data = await api.apiMeapiTokensPost(body);
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
| **personalAccessTokenJsonhalPersonalAccessTokenWrite** | [PersonalAccessTokenJsonhalPersonalAccessTokenWrite](PersonalAccessTokenJsonhalPersonalAccessTokenWrite.md) | The new personal access token resource | |

### Return type

[**PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead**](PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/hal+json`
- **Accept**: `application/hal+json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | personal access token resource created |  -  |
| **400** | Invalid input |  -  |
| **403** | Forbidden |  -  |
| **422** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

