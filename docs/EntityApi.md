# EntityApi

All URIs are relative to *http://api.jsonhub.orb.local*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiEntitiesGetCollection**](EntityApi.md#apientitiesgetcollection) | **GET** /api/entities | Retrieves the collection of entity resources. |
| [**apiEntitiesIdDelete**](EntityApi.md#apientitiesiddelete) | **DELETE** /api/entities/{id} | Removes the entity resource. |
| [**apiEntitiesIdGet**](EntityApi.md#apientitiesidget) | **GET** /api/entities/{id} | Retrieves a entity resource. |
| [**apiEntitiesIdPatch**](EntityApi.md#apientitiesidpatch) | **PATCH** /api/entities/{id} | Updates the entity resource. |
| [**apiEntitiesPost**](EntityApi.md#apientitiespost) | **POST** /api/entities | Creates a entity resource. |



## apiEntitiesGetCollection

> ApiEntitiesGetCollection200Response apiEntitiesGetCollection(qid, _private, owned, page, limit, properties, definition, parent)

Retrieves the collection of entity resources.

Retrieves the collection of entity resources.

### Example

```ts
import {
  Configuration,
  EntityApi,
} from 'jsonhub-sdk';
import type { ApiEntitiesGetCollectionRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EntityApi(config);

  const body = {
    // string | Filter by slug/id (partial match) (optional)
    qid: qid_example,
    // boolean | Show only private entities (owned by the current user) (optional)
    _private: true,
    // boolean | Show only entities owned by the current user (optional)
    owned: true,
    // number | The collection page number (optional)
    page: 56,
    // number | The number of items per page (optional)
    limit: 56,
    // Array<string> | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]={propertyName}&properties[]={anotherPropertyName}&properties[{nestedPropertyParent}][]={nestedProperty} (optional)
    properties: ...,
    // string | Filter by definition (uuid) (optional)
    definition: definition_example,
    // string | Filter by parent (uuid) (optional)
    parent: parent_example,
  } satisfies ApiEntitiesGetCollectionRequest;

  try {
    const data = await api.apiEntitiesGetCollection(body);
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
| **_private** | `boolean` | Show only private entities (owned by the current user) | [Optional] [Defaults to `undefined`] |
| **owned** | `boolean` | Show only entities owned by the current user | [Optional] [Defaults to `undefined`] |
| **page** | `number` | The collection page number | [Optional] [Defaults to `1`] |
| **limit** | `number` | The number of items per page | [Optional] [Defaults to `10`] |
| **properties** | `Array<string>` | Allows you to reduce the response to contain only the properties you need. If your desired property is nested, you can address it using nested arrays. Example: properties[]&#x3D;{propertyName}&amp;properties[]&#x3D;{anotherPropertyName}&amp;properties[{nestedPropertyParent}][]&#x3D;{nestedProperty} | [Optional] |
| **definition** | `string` | Filter by definition (uuid) | [Optional] [Defaults to `undefined`] |
| **parent** | `string` | Filter by parent (uuid) | [Optional] [Defaults to `undefined`] |

### Return type

[**ApiEntitiesGetCollection200Response**](ApiEntitiesGetCollection200Response.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | entity collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiEntitiesIdDelete

> apiEntitiesIdDelete(id)

Removes the entity resource.

Removes the entity resource.

### Example

```ts
import {
  Configuration,
  EntityApi,
} from 'jsonhub-sdk';
import type { ApiEntitiesIdDeleteRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EntityApi(config);

  const body = {
    // string | entity identifier
    id: id_example,
  } satisfies ApiEntitiesIdDeleteRequest;

  try {
    const data = await api.apiEntitiesIdDelete(body);
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
| **id** | `string` | entity identifier | [Defaults to `undefined`] |

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
| **204** | entity resource deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiEntitiesIdGet

> EntityJsonldEntityReadEntityReadParent apiEntitiesIdGet(id)

Retrieves a entity resource.

Retrieves a entity resource.

### Example

```ts
import {
  Configuration,
  EntityApi,
} from 'jsonhub-sdk';
import type { ApiEntitiesIdGetRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EntityApi(config);

  const body = {
    // string | entity identifier
    id: id_example,
  } satisfies ApiEntitiesIdGetRequest;

  try {
    const data = await api.apiEntitiesIdGet(body);
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
| **id** | `string` | entity identifier | [Defaults to `undefined`] |

### Return type

[**EntityJsonldEntityReadEntityReadParent**](EntityJsonldEntityReadEntityReadParent.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | entity resource |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiEntitiesIdPatch

> EntityJsonldEntityReadEntityReadParent apiEntitiesIdPatch(id, entityEntityUpdate)

Updates the entity resource.

Updates the entity resource.

### Example

```ts
import {
  Configuration,
  EntityApi,
} from 'jsonhub-sdk';
import type { ApiEntitiesIdPatchRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EntityApi(config);

  const body = {
    // string | entity identifier
    id: id_example,
    // EntityEntityUpdate | The updated entity resource
    entityEntityUpdate: ...,
  } satisfies ApiEntitiesIdPatchRequest;

  try {
    const data = await api.apiEntitiesIdPatch(body);
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
| **id** | `string` | entity identifier | [Defaults to `undefined`] |
| **entityEntityUpdate** | [EntityEntityUpdate](EntityEntityUpdate.md) | The updated entity resource | |

### Return type

[**EntityJsonldEntityReadEntityReadParent**](EntityJsonldEntityReadEntityReadParent.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/merge-patch+json`, `application/vnd.api+json`
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | entity resource updated |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |
| **403** | Forbidden |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiEntitiesPost

> EntityJsonldEntityReadEntityReadParent apiEntitiesPost(entityJsonldEntityCreate)

Creates a entity resource.

Creates a entity resource.

### Example

```ts
import {
  Configuration,
  EntityApi,
} from 'jsonhub-sdk';
import type { ApiEntitiesPostRequest } from 'jsonhub-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: access_token
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EntityApi(config);

  const body = {
    // EntityJsonldEntityCreate | The new entity resource
    entityJsonldEntityCreate: ...,
  } satisfies ApiEntitiesPostRequest;

  try {
    const data = await api.apiEntitiesPost(body);
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
| **entityJsonldEntityCreate** | [EntityJsonldEntityCreate](EntityJsonldEntityCreate.md) | The new entity resource | |

### Return type

[**EntityJsonldEntityReadEntityReadParent**](EntityJsonldEntityReadEntityReadParent.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`
- **Accept**: `application/ld+json`, `application/json`, `application/hal+json`, `application/vnd.api+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | entity resource created |  -  |
| **400** | Invalid input |  -  |
| **422** | Unprocessable entity |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

