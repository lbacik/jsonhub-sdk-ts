# Oauth2Api

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiOauth2tokenPost**](Oauth2Api.md#apioauth2tokenpost) | **POST** /api/oauth2/token | Retrieve an OAuth2 Token |



## apiOauth2tokenPost

> Oauth2JsonhalOauth2Read apiOauth2tokenPost(oauth2JsonhalOauth2Write)

Retrieve an OAuth2 Token

This endpoint issues an OAuth2 token using your client credentials.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { ApiOauth2tokenPostRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  const body = {
    // Oauth2JsonhalOauth2Write | The new oauth2 resource
    oauth2JsonhalOauth2Write: ...,
  } satisfies ApiOauth2tokenPostRequest;

  try {
    const data = await api.apiOauth2tokenPost(body);
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
| **oauth2JsonhalOauth2Write** | [Oauth2JsonhalOauth2Write](Oauth2JsonhalOauth2Write.md) | The new oauth2 resource | |

### Return type

[**Oauth2JsonhalOauth2Read**](Oauth2JsonhalOauth2Read.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/hal+json`
- **Accept**: `application/hal+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | oauth2 resource created |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

