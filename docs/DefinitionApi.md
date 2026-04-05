# DefinitionApi

All URIs are relative to *http://api.jsonhub.orb.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiDefinitionsGetCollection**](DefinitionApi.md#apidefinitionsgetcollection) | **GET** /api/definitions | Retrieves the collection of definition resources. |
| [**apiDefinitionsIdDelete**](DefinitionApi.md#apidefinitionsiddelete) | **DELETE** /api/definitions/{id} | Removes the definition resource. |
| [**apiDefinitionsIdGet**](DefinitionApi.md#apidefinitionsidget) | **GET** /api/definitions/{id} | Retrieves a definition resource. |
| [**apiDefinitionsIdPatch**](DefinitionApi.md#apidefinitionsidpatch) | **PATCH** /api/definitions/{id} | Updates the definition resource. |
| [**apiDefinitionsPost**](DefinitionApi.md#apidefinitionspost) | **POST** /api/definitions | Creates a definition resource. |



## apiDefinitionsGetCollection

> ApiDefinitionsGetCollection200Response apiDefinitionsGetCollection(qid, owned, page, limit, properties, parentEntity)

Retrieves the collection of definition resources.

Retrieves the collection of definition resources.

### Example

```ts
import {
  Configuration,
  DefinitionApi,
} from 'jsonhub-sdk';
import type { ApiDefinitionsGetCollectionRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefinitionApi(config);

  const body = {
    // string | Filter by slug/id (partial match) (optional)
    qid: qid_example,
    // boolean | Show only definitions owned by the current user (optional)
    owned: true,
    // number | The collection page number (optional)
    page: 56,
    // number | The number of items per page (optional)
    limit: 56,
    // Array<string> | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)
    properties: ...,
    // string | Filter by parentEntity (uuid) (optional)
    parentEntity: parentEntity_example,
  } satisfies ApiDefinitionsGetCollectionRequest;

  try {
    const data = await api.apiDefinitionsGetCollection(body);
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
| **qid** | `string` | Filter by slug/id (partial match) | [Optional] [Defaults to `undefined`] |
| **owned** | `boolean` | Show only definitions owned by the current user | [Optional] [Defaults to `undefined`] |
| **page** | `number` | The collection page number | [Optional] [Defaults to `1`] |
| **limit** | `number` | The number of items per page | [Optional] [Defaults to `10`] |
| **properties** | `Array<string>` | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [Optional] |
| **parentEntity** | `string` | Filter by parentEntity (uuid) | [Optional] [Defaults to `undefined`] |

### Return type

[**ApiDefinitionsGetCollection200Response**](ApiDefinitionsGetCollection200Response.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | definition collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiDefinitionsIdDelete

> apiDefinitionsIdDelete(id)

Removes the definition resource.

Removes the definition resource.

### Example

```ts
import {
  Configuration,
  DefinitionApi,
} from 'jsonhub-sdk';
import type { ApiDefinitionsIdDeleteRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefinitionApi(config);

  const body = {
    // string | definition identifier
    id: id_example,
  } satisfies ApiDefinitionsIdDeleteRequest;

  try {
    const data = await api.apiDefinitionsIdDelete(body);
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
| **id** | `string` | definition identifier | [Defaults to `undefined`] |

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
| **204** | definition resource deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiDefinitionsIdGet

> DefinitionJsonldDefinitionRead apiDefinitionsIdGet(id)

Retrieves a definition resource.

Retrieves a definition resource.

### Example

```ts
import {
  Configuration,
  DefinitionApi,
} from 'jsonhub-sdk';
import type { ApiDefinitionsIdGetRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefinitionApi(config);

  const body = {
    // string | definition identifier
    id: id_example,
  } satisfies ApiDefinitionsIdGetRequest;

  try {
    const data = await api.apiDefinitionsIdGet(body);
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
| **id** | `string` | definition identifier | [Defaults to `undefined`] |

### Return type

[**DefinitionJsonldDefinitionRead**](DefinitionJsonldDefinitionRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | definition resource |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiDefinitionsIdPatch

> DefinitionJsonldDefinitionRead apiDefinitionsIdPatch(id, definitionDefinitionWrite)

Updates the definition resource.

Updates the definition resource.

### Example

```ts
import {
  Configuration,
  DefinitionApi,
} from 'jsonhub-sdk';
import type { ApiDefinitionsIdPatchRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefinitionApi(config);

  const body = {
    // string | definition identifier
    id: id_example,
    // DefinitionDefinitionWrite | The updated definition resource
    definitionDefinitionWrite: ...,
  } satisfies ApiDefinitionsIdPatchRequest;

  try {
    const data = await api.apiDefinitionsIdPatch(body);
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
| **id** | `string` | definition identifier | [Defaults to `undefined`] |
| **definitionDefinitionWrite** | [DefinitionDefinitionWrite](DefinitionDefinitionWrite.md) | The updated definition resource | |

### Return type

[**DefinitionJsonldDefinitionRead**](DefinitionJsonldDefinitionRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/merge-patch+json`, `application/vnd.api+json`
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | definition resource updated |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiDefinitionsPost

> DefinitionJsonldDefinitionRead apiDefinitionsPost(definitionJsonldDefinitionWrite)

Creates a definition resource.

Creates a definition resource.

### Example

```ts
import {
  Configuration,
  DefinitionApi,
} from 'jsonhub-sdk';
import type { ApiDefinitionsPostRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefinitionApi(config);

  const body = {
    // DefinitionJsonldDefinitionWrite | The new definition resource
    definitionJsonldDefinitionWrite: ...,
  } satisfies ApiDefinitionsPostRequest;

  try {
    const data = await api.apiDefinitionsPost(body);
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
| **definitionJsonldDefinitionWrite** | [DefinitionJsonldDefinitionWrite](DefinitionJsonldDefinitionWrite.md) | The new definition resource | |

### Return type

[**DefinitionJsonldDefinitionRead**](DefinitionJsonldDefinitionRead.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | definition resource created |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

