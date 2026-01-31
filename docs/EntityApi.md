# JsonHubApi.EntityApi

All URIs are relative to *https://api.jsonhub.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEntitiesGetCollection**](EntityApi.md#apiEntitiesGetCollection) | **GET** /api/entities | Retrieves the collection of entity resources.
[**apiEntitiesIdDelete**](EntityApi.md#apiEntitiesIdDelete) | **DELETE** /api/entities/{id} | Removes the entity resource.
[**apiEntitiesIdGet**](EntityApi.md#apiEntitiesIdGet) | **GET** /api/entities/{id} | Retrieves a entity resource.
[**apiEntitiesIdPatch**](EntityApi.md#apiEntitiesIdPatch) | **PATCH** /api/entities/{id} | Updates the entity resource.
[**apiEntitiesPost**](EntityApi.md#apiEntitiesPost) | **POST** /api/entities | Creates a entity resource.



## apiEntitiesGetCollection

> ApiEntitiesGetCollection200Response apiEntitiesGetCollection(opts)

Retrieves the collection of entity resources.

Retrieves the collection of entity resources.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.EntityApi();
let opts = {
  'qid': "qid_example", // String | Filter by slug/id (partial match)
  '_private': true, // Boolean | Show only private entities (owned by the current user)
  'isOwnedByMe': true, // Boolean | Show only entities owned by the current user
  'page': 1, // Number | The collection page number
  'limit': 10, // Number | The number of items per page
  'properties': ["null"], // [String] | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty}
  'definition': "definition_example", // String | Filter by definition (uuid)
  'parent': "parent_example" // String | Filter by parent (uuid)
};
apiInstance.apiEntitiesGetCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qid** | **String**| Filter by slug/id (partial match) | [optional] 
 **_private** | **Boolean**| Show only private entities (owned by the current user) | [optional] 
 **isOwnedByMe** | **Boolean**| Show only entities owned by the current user | [optional] 
 **page** | **Number**| The collection page number | [optional] [default to 1]
 **limit** | **Number**| The number of items per page | [optional] [default to 10]
 **properties** | [**[String]**](String.md)| Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [optional] 
 **definition** | **String**| Filter by definition (uuid) | [optional] 
 **parent** | **String**| Filter by parent (uuid) | [optional] 

### Return type

[**ApiEntitiesGetCollection200Response**](ApiEntitiesGetCollection200Response.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json


## apiEntitiesIdDelete

> apiEntitiesIdDelete(id)

Removes the entity resource.

Removes the entity resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.EntityApi();
let id = "id_example"; // String | entity identifier
apiInstance.apiEntitiesIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| entity identifier | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiEntitiesIdGet

> EntityJsonldEntityReadEntityReadParent apiEntitiesIdGet(id)

Retrieves a entity resource.

Retrieves a entity resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.EntityApi();
let id = "id_example"; // String | entity identifier
apiInstance.apiEntitiesIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| entity identifier | 

### Return type

[**EntityJsonldEntityReadEntityReadParent**](EntityJsonldEntityReadEntityReadParent.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json


## apiEntitiesIdPatch

> EntityJsonldEntityReadEntityReadParent apiEntitiesIdPatch(id, entityEntityUpdate)

Updates the entity resource.

Updates the entity resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.EntityApi();
let id = "id_example"; // String | entity identifier
let entityEntityUpdate = new JsonHubApi.EntityEntityUpdate(); // EntityEntityUpdate | The updated entity resource
apiInstance.apiEntitiesIdPatch(id, entityEntityUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| entity identifier | 
 **entityEntityUpdate** | [**EntityEntityUpdate**](EntityEntityUpdate.md)| The updated entity resource | 

### Return type

[**EntityJsonldEntityReadEntityReadParent**](EntityJsonldEntityReadEntityReadParent.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json


## apiEntitiesPost

> EntityJsonldEntityReadEntityReadParent apiEntitiesPost(entityJsonldEntityCreate)

Creates a entity resource.

Creates a entity resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.EntityApi();
let entityJsonldEntityCreate = new JsonHubApi.EntityJsonldEntityCreate(); // EntityJsonldEntityCreate | The new entity resource
apiInstance.apiEntitiesPost(entityJsonldEntityCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityJsonldEntityCreate** | [**EntityJsonldEntityCreate**](EntityJsonldEntityCreate.md)| The new entity resource | 

### Return type

[**EntityJsonldEntityReadEntityReadParent**](EntityJsonldEntityReadEntityReadParent.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: application/ld+json, application/json

