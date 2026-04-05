# Oauth2Api

All URIs are relative to *http://api.jsonhub.orb.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiOauth2tokenPost**](Oauth2Api.md#apioauth2tokenpost) | **POST** /api/oauth2/token | Retrieve an OAuth2 Token |



## apiOauth2tokenPost

> Oauth2JsonldOauth2Read apiOauth2tokenPost(oauth2JsonldOauth2Write)

Retrieve an OAuth2 Token

This endpoint issues an OAuth2 token using your client credentials.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-sdk';
import type { ApiOauth2tokenPostRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const api = new Oauth2Api();

  const body = {
    // Oauth2JsonldOauth2Write | The new oauth2 resource
    oauth2JsonldOauth2Write: ...,
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
| **oauth2JsonldOauth2Write** | [Oauth2JsonldOauth2Write](Oauth2JsonldOauth2Write.md) | The new oauth2 resource | |

### Return type

[**Oauth2JsonldOauth2Read**](Oauth2JsonldOauth2Read.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | oauth2 resource created |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

