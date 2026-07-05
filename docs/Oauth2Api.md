# Oauth2Api

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**oauth2Authorize**](Oauth2Api.md#oauth2authorize) | **GET** /oauth2/authorize | Start OAuth authorization |
| [**oauth2Jwks**](Oauth2Api.md#oauth2jwks) | **GET** /oauth2/jwks | Get OAuth signing keys |
| [**oauth2Metadata**](Oauth2Api.md#oauth2metadata) | **GET** /.well-known/oauth-authorization-server | OAuth2 authorization server metadata |
| [**oauth2Register**](Oauth2Api.md#oauth2registeroperation) | **POST** /oauth2/register | Register OAuth client |
| [**oauth2Revoke**](Oauth2Api.md#oauth2revoke) | **POST** /oauth2/revoke | Revoke OAuth consent |
| [**oauth2Token**](Oauth2Api.md#oauth2token) | **POST** /oauth2/token | Exchange authorization code |
| [**oauth2TokenExchange**](Oauth2Api.md#oauth2tokenexchange) | **POST** /oauth2/token-exchange | Exchange MCP token for JsonHub API token |



## oauth2Authorize

> oauth2Authorize(responseType, clientId, redirectUri, scope, state, codeChallenge, codeChallengeMethod, resource, audience)

Start OAuth authorization

Browser endpoint for Authorization Code with PKCE. Requires a JsonHub session and consent before issuing an authorization code.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { Oauth2AuthorizeRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  const body = {
    // 'code' | Must be code.
    responseType: code,
    // string | Registered OAuth client identifier.
    clientId: jh_client_id,
    // string | Exact registered redirect URI.
    redirectUri: https://chat.openai.com/aip/g-abc/oauth/callback,
    // string | Requested scopes. MVP supports idea-forge-mcp.
    scope: idea-forge-mcp,
    // string | Opaque client state returned unchanged.
    state: client-csrf-state,
    // string | PKCE S256 code challenge.
    codeChallenge: codeChallenge_example,
    // 'S256' | Must be S256.
    codeChallengeMethod: S256,
    // string | Optional MCP resource/audience. (optional)
    resource: idea-forge-mcp,
    // string | Optional alias for resource. (optional)
    audience: idea-forge-mcp,
  } satisfies Oauth2AuthorizeRequest;

  try {
    const data = await api.oauth2Authorize(body);
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
| **responseType** | `code` | Must be code. | [Defaults to `undefined`] [Enum: code] |
| **clientId** | `string` | Registered OAuth client identifier. | [Defaults to `undefined`] |
| **redirectUri** | `string` | Exact registered redirect URI. | [Defaults to `undefined`] |
| **scope** | `string` | Requested scopes. MVP supports idea-forge-mcp. | [Defaults to `undefined`] |
| **state** | `string` | Opaque client state returned unchanged. | [Defaults to `undefined`] |
| **codeChallenge** | `string` | PKCE S256 code challenge. | [Defaults to `undefined`] |
| **codeChallengeMethod** | `S256` | Must be S256. | [Defaults to `undefined`] [Enum: S256] |
| **resource** | `string` | Optional MCP resource/audience. | [Optional] [Defaults to `undefined`] |
| **audience** | `string` | Optional alias for resource. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **302** | Redirects to JsonHub login, consent, or the client redirect_uri with code/error and state. |  -  |
| **400** | JsonHub-hosted authorization error when redirect_uri is missing or unsafe. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauth2Jwks

> Oauth2Jwks200Response oauth2Jwks()

Get OAuth signing keys

Publishes public RSA keys for local JWT validation by MCP and other resource servers.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { Oauth2JwksRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  try {
    const data = await api.oauth2Jwks();
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

[**Oauth2Jwks200Response**](Oauth2Jwks200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON Web Key Set used to validate RS256 JWT signatures |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauth2Metadata

> Oauth2Metadata200Response oauth2Metadata()

OAuth2 authorization server metadata

Discovery document for ChatGPT/MCP OAuth2 Authorization Code with PKCE, JWKS, revocation, and token exchange.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { Oauth2MetadataRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  try {
    const data = await api.oauth2Metadata();
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

[**Oauth2Metadata200Response**](Oauth2Metadata200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OAuth2 Authorization Server metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauth2Register

> Oauth2Register201Response oauth2Register(oauth2RegisterRequest)

Register OAuth client

Controlled Dynamic Client Registration. Redirect URIs must be HTTPS, except HTTP localhost/127.0.0.1 for development.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { Oauth2RegisterOperationRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  const body = {
    // Oauth2RegisterRequest | Client metadata
    oauth2RegisterRequest: ...,
  } satisfies Oauth2RegisterOperationRequest;

  try {
    const data = await api.oauth2Register(body);
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
| **oauth2RegisterRequest** | [Oauth2RegisterRequest](Oauth2RegisterRequest.md) | Client metadata | |

### Return type

[**Oauth2Register201Response**](Oauth2Register201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Registered OAuth client metadata |  -  |
| **400** | OAuth registration error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauth2Revoke

> object oauth2Revoke(token, clientId, clientSecret, audience)

Revoke OAuth consent

Revokes the matching consent grant when the token can be validated. Already-issued short-lived JWTs remain valid until expiry.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { Oauth2RevokeRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  const body = {
    // string
    token: token_example,
    // string
    clientId: clientId_example,
    // string (optional)
    clientSecret: clientSecret_example,
    // string (optional)
    audience: audience_example,
  } satisfies Oauth2RevokeRequest;

  try {
    const data = await api.oauth2Revoke(body);
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
| **token** | `string` |  | [Defaults to `undefined`] |
| **clientId** | `string` |  | [Defaults to `undefined`] |
| **clientSecret** | `string` |  | [Optional] [Defaults to `undefined`] |
| **audience** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Idempotent empty revocation response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauth2Token

> Oauth2Token200Response oauth2Token(grantType, code, redirectUri, clientId, codeVerifier)

Exchange authorization code

Exchanges a single-use authorization code for a short-lived RS256 JWT access token. Public clients must provide the PKCE verifier.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { Oauth2TokenRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  const body = {
    // string
    grantType: grantType_example,
    // string
    code: code_example,
    // string
    redirectUri: redirectUri_example,
    // string
    clientId: clientId_example,
    // string
    codeVerifier: codeVerifier_example,
  } satisfies Oauth2TokenRequest;

  try {
    const data = await api.oauth2Token(body);
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
| **grantType** | `authorization_code` |  | [Defaults to `undefined`] [Enum: authorization_code] |
| **code** | `string` |  | [Defaults to `undefined`] |
| **redirectUri** | `string` |  | [Defaults to `undefined`] |
| **clientId** | `string` |  | [Defaults to `undefined`] |
| **codeVerifier** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Oauth2Token200Response**](Oauth2Token200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bearer access token for the MCP resource audience |  -  |
| **400** | OAuth token error |  -  |
| **401** | Invalid client or authorization code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauth2TokenExchange

> Oauth2TokenExchange200Response oauth2TokenExchange(grantType, clientId, subjectToken, subjectTokenType, audience, clientSecret, subjectAudience)

Exchange MCP token for JsonHub API token

OAuth 2.0 Token Exchange style endpoint. The MCP backend authenticates as a confidential client and exchanges an MCP-audience subject token for a short-lived downstream token with aud&#x3D;jsonhub-api.

### Example

```ts
import {
  Configuration,
  Oauth2Api,
} from 'jsonhub-api-sdk';
import type { Oauth2TokenExchangeRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
  const api = new Oauth2Api();

  const body = {
    // string
    grantType: grantType_example,
    // string
    clientId: clientId_example,
    // string
    subjectToken: subjectToken_example,
    // string
    subjectTokenType: subjectTokenType_example,
    // string
    audience: audience_example,
    // string (optional)
    clientSecret: clientSecret_example,
    // string (optional)
    subjectAudience: subjectAudience_example,
  } satisfies Oauth2TokenExchangeRequest;

  try {
    const data = await api.oauth2TokenExchange(body);
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
| **grantType** | `string` |  | [Defaults to `undefined`] |
| **clientId** | `string` |  | [Defaults to `undefined`] |
| **subjectToken** | `string` |  | [Defaults to `undefined`] |
| **subjectTokenType** | `string` |  | [Defaults to `undefined`] |
| **audience** | `jsonhub-api` |  | [Defaults to `undefined`] [Enum: jsonhub-api] |
| **clientSecret** | `string` |  | [Optional] [Defaults to `undefined`] |
| **subjectAudience** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Oauth2TokenExchange200Response**](Oauth2TokenExchange200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Downstream JsonHub API access token |  -  |
| **400** | OAuth token exchange error |  -  |
| **401** | Invalid confidential client or subject token |  -  |
| **403** | Missing scope or revoked consent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

