# JsonHubApi.DefinitionApi

All URIs are relative to *https://api.jsonhub.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDefinitionsGetCollection**](DefinitionApi.md#apiDefinitionsGetCollection) | **GET** /api/definitions | Retrieves the collection of definition resources.
[**apiDefinitionsIdDelete**](DefinitionApi.md#apiDefinitionsIdDelete) | **DELETE** /api/definitions/{id} | Removes the definition resource.
[**apiDefinitionsIdGet**](DefinitionApi.md#apiDefinitionsIdGet) | **GET** /api/definitions/{id} | Retrieves a definition resource.
[**apiDefinitionsIdPatch**](DefinitionApi.md#apiDefinitionsIdPatch) | **PATCH** /api/definitions/{id} | Updates the definition resource.
[**apiDefinitionsPost**](DefinitionApi.md#apiDefinitionsPost) | **POST** /api/definitions | Creates a definition resource.



## apiDefinitionsGetCollection

> ApiDefinitionsGetCollection200Response apiDefinitionsGetCollection(opts)

Retrieves the collection of definition resources.

Retrieves the collection of definition resources.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.DefinitionApi();
let opts = {
  'qid': "qid_example", // String | Filter by slug/id (partial match)
  'isOwnedByMe': true, // Boolean | Show only definitions owned by the current user
  'page': 1, // Number | The collection page number
  'limit': 10, // Number | The number of items per page
  'properties': ["null"], // [String] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty}
  'parentEntity': "parentEntity_example" // String | Filter by parentEntity (uuid)
};
apiInstance.apiDefinitionsGetCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qid** | **String**| Filter by slug/id (partial match) | [optional] 
 **isOwnedByMe** | **Boolean**| Show only definitions owned by the current user | [optional] 
 **page** | **Number**| The collection page number | [optional] [default to 1]
 **limit** | **Number**| The number of items per page | [optional] [default to 10]
 **properties** | [**[String]**](String.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 
 **parentEntity** | **String**| Filter by parentEntity (uuid) | [optional] 

### Return type

[**ApiDefinitionsGetCollection200Response**](ApiDefinitionsGetCollection200Response.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json


## apiDefinitionsIdDelete

> apiDefinitionsIdDelete(id)

Removes the definition resource.

Removes the definition resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.DefinitionApi();
let id = "id_example"; // String | definition identifier
apiInstance.apiDefinitionsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| definition identifier | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiDefinitionsIdGet

> DefinitionJsonldDefinitionRead apiDefinitionsIdGet(id)

Retrieves a definition resource.

Retrieves a definition resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.DefinitionApi();
let id = "id_example"; // String | definition identifier
apiInstance.apiDefinitionsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| definition identifier | 

### Return type

[**DefinitionJsonldDefinitionRead**](DefinitionJsonldDefinitionRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json


## apiDefinitionsIdPatch

> DefinitionJsonldDefinitionRead apiDefinitionsIdPatch(id, definitionDefinitionWrite)

Updates the definition resource.

Updates the definition resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.DefinitionApi();
let id = "id_example"; // String | definition identifier
let definitionDefinitionWrite = new JsonHubApi.DefinitionDefinitionWrite(); // DefinitionDefinitionWrite | The updated definition resource
apiInstance.apiDefinitionsIdPatch(id, definitionDefinitionWrite).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| definition identifier | 
 **definitionDefinitionWrite** | [**DefinitionDefinitionWrite**](DefinitionDefinitionWrite.md)| The updated definition resource | 

### Return type

[**DefinitionJsonldDefinitionRead**](DefinitionJsonldDefinitionRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json


## apiDefinitionsPost

> DefinitionJsonldDefinitionRead apiDefinitionsPost(definitionJsonldDefinitionWrite)

Creates a definition resource.

Creates a definition resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.DefinitionApi();
let definitionJsonldDefinitionWrite = new JsonHubApi.DefinitionJsonldDefinitionWrite(); // DefinitionJsonldDefinitionWrite | The new definition resource
apiInstance.apiDefinitionsPost(definitionJsonldDefinitionWrite).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **definitionJsonldDefinitionWrite** | [**DefinitionJsonldDefinitionWrite**](DefinitionJsonldDefinitionWrite.md)| The new definition resource | 

### Return type

[**DefinitionJsonldDefinitionRead**](DefinitionJsonldDefinitionRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: application/ld+json, application/json

