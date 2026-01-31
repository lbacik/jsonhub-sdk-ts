# JsonHubApi.Oauth2Api

All URIs are relative to *https://api.jsonhub.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOauth2tokenPost**](Oauth2Api.md#apiOauth2tokenPost) | **POST** /api/oauth2/token | Retrieve an OAuth2 Token



## apiOauth2tokenPost

> Oauth2JsonldOauth2Read apiOauth2tokenPost(oauth2JsonldOauth2Write)

Retrieve an OAuth2 Token

This endpoint issues an OAuth2 token using your client credentials.

### Example

```javascript
import JsonHubApi from 'json_hub_api';

let apiInstance = new JsonHubApi.Oauth2Api();
let oauth2JsonldOauth2Write = new JsonHubApi.Oauth2JsonldOauth2Write(); // Oauth2JsonldOauth2Write | The new oauth2 resource
apiInstance.apiOauth2tokenPost(oauth2JsonldOauth2Write).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth2JsonldOauth2Write** | [**Oauth2JsonldOauth2Write**](Oauth2JsonldOauth2Write.md)| The new oauth2 resource | 

### Return type

[**Oauth2JsonldOauth2Read**](Oauth2JsonldOauth2Read.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: application/ld+json, application/json

