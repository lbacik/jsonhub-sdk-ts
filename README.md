# jsonhub-api-sdk@0.0.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install jsonhub-api-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  DefinitionApi,
} from 'jsonhub-api-sdk';
import type { ApiDefinitionsGetCollectionRequest } from 'jsonhub-api-sdk';

async function example() {
  console.log("🚀 Testing jsonhub-api-sdk SDK...");
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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*DefinitionApi* | [**apiDefinitionsGetCollection**](docs/DefinitionApi.md#apidefinitionsgetcollection) | **GET** /api/definitions | Retrieves the collection of definition resources.
*DefinitionApi* | [**apiDefinitionsIdDelete**](docs/DefinitionApi.md#apidefinitionsiddelete) | **DELETE** /api/definitions/{id} | Removes the definition resource.
*DefinitionApi* | [**apiDefinitionsIdGet**](docs/DefinitionApi.md#apidefinitionsidget) | **GET** /api/definitions/{id} | Retrieves a definition resource.
*DefinitionApi* | [**apiDefinitionsIdPatch**](docs/DefinitionApi.md#apidefinitionsidpatch) | **PATCH** /api/definitions/{id} | Updates the definition resource.
*DefinitionApi* | [**apiDefinitionsPost**](docs/DefinitionApi.md#apidefinitionspost) | **POST** /api/definitions | Creates a definition resource.
*EntityApi* | [**apiEntitiesGetCollection**](docs/EntityApi.md#apientitiesgetcollection) | **GET** /api/entities | Retrieves the collection of entity resources.
*EntityApi* | [**apiEntitiesIdDelete**](docs/EntityApi.md#apientitiesiddelete) | **DELETE** /api/entities/{id} | Removes the entity resource.
*EntityApi* | [**apiEntitiesIdGet**](docs/EntityApi.md#apientitiesidget) | **GET** /api/entities/{id} | Retrieves a entity resource.
*EntityApi* | [**apiEntitiesIdPatch**](docs/EntityApi.md#apientitiesidpatch) | **PATCH** /api/entities/{id} | Updates the entity resource.
*EntityApi* | [**apiEntitiesPost**](docs/EntityApi.md#apientitiespost) | **POST** /api/entities | Creates a entity resource.
*Oauth2Api* | [**oauth2Authorize**](docs/Oauth2Api.md#oauth2authorize) | **GET** /oauth2/authorize | Start OAuth authorization
*Oauth2Api* | [**oauth2Jwks**](docs/Oauth2Api.md#oauth2jwks) | **GET** /oauth2/jwks | Get OAuth signing keys
*Oauth2Api* | [**oauth2Metadata**](docs/Oauth2Api.md#oauth2metadata) | **GET** /.well-known/oauth-authorization-server | OAuth2 authorization server metadata
*Oauth2Api* | [**oauth2Register**](docs/Oauth2Api.md#oauth2registeroperation) | **POST** /oauth2/register | Register OAuth client
*Oauth2Api* | [**oauth2Revoke**](docs/Oauth2Api.md#oauth2revoke) | **POST** /oauth2/revoke | Revoke OAuth consent
*Oauth2Api* | [**oauth2Token**](docs/Oauth2Api.md#oauth2token) | **POST** /oauth2/token | Exchange authorization code
*Oauth2Api* | [**oauth2TokenExchange**](docs/Oauth2Api.md#oauth2tokenexchange) | **POST** /oauth2/token-exchange | Exchange MCP token for JsonHub API token
*PersonalAccessTokenApi* | [**apiMeapiTokensGetCollection**](docs/PersonalAccessTokenApi.md#apimeapitokensgetcollection) | **GET** /api/me/api-tokens | Retrieves the collection of personal access token resources.
*PersonalAccessTokenApi* | [**apiMeapiTokensIdDelete**](docs/PersonalAccessTokenApi.md#apimeapitokensiddelete) | **DELETE** /api/me/api-tokens/{id} | Removes the personal access token resource.
*PersonalAccessTokenApi* | [**apiMeapiTokensIdPatch**](docs/PersonalAccessTokenApi.md#apimeapitokensidpatch) | **PATCH** /api/me/api-tokens/{id} | Updates the personal access token resource.
*PersonalAccessTokenApi* | [**apiMeapiTokensPost**](docs/PersonalAccessTokenApi.md#apimeapitokenspost) | **POST** /api/me/api-tokens | Creates a personal access token resource.
*UserApi* | [**apiUsersIdDelete**](docs/UserApi.md#apiusersiddelete) | **DELETE** /api/users/{id} | Removes the user resource.
*UserApi* | [**apiUsersIdPatch**](docs/UserApi.md#apiusersidpatch) | **PATCH** /api/users/{id} | Updates the user resource.
*UserApi* | [**apiUsersPost**](docs/UserApi.md#apiuserspost) | **POST** /api/users | Creates a user resource.
*UserApi* | [**apiUsersmeGet**](docs/UserApi.md#apiusersmeget) | **GET** /api/users/me | Get current user information
*UserApi* | [**apiUsersresendActivationPost**](docs/UserApi.md#apiusersresendactivationpost) | **POST** /api/users/resend-activation | Resend activation email
*UserApi* | [**apiUsersresetPasswordPost**](docs/UserApi.md#apiusersresetpasswordpost) | **POST** /api/users/reset-password | Reset password (with token)
*UserApi* | [**apiUserssendResetPasswordPost**](docs/UserApi.md#apiuserssendresetpasswordpost) | **POST** /api/users/send-reset-password | Send reset password email


### Models

- [ApiDefinitionsGetCollection200Response](docs/ApiDefinitionsGetCollection200Response.md)
- [ApiEntitiesGetCollection200Response](docs/ApiEntitiesGetCollection200Response.md)
- [ApiMeapiTokensGetCollection200Response](docs/ApiMeapiTokensGetCollection200Response.md)
- [ApiUsersmeGet200Response](docs/ApiUsersmeGet200Response.md)
- [ApiUsersmeGet200ResponseLimits](docs/ApiUsersmeGet200ResponseLimits.md)
- [ApiUsersmeGet200ResponseLimitsDefinitions](docs/ApiUsersmeGet200ResponseLimitsDefinitions.md)
- [ApiUsersmeGet200ResponseLimitsEntities](docs/ApiUsersmeGet200ResponseLimitsEntities.md)
- [ApiUsersmeGet200ResponseLimitsPrivateEntities](docs/ApiUsersmeGet200ResponseLimitsPrivateEntities.md)
- [ConstraintViolation](docs/ConstraintViolation.md)
- [ConstraintViolationJsonld](docs/ConstraintViolationJsonld.md)
- [ConstraintViolationViolationsInner](docs/ConstraintViolationViolationsInner.md)
- [CurrentUserLimitUsage](docs/CurrentUserLimitUsage.md)
- [CurrentUserLimitUsageJsonld](docs/CurrentUserLimitUsageJsonld.md)
- [CurrentUserLimits](docs/CurrentUserLimits.md)
- [CurrentUserLimitsJsonld](docs/CurrentUserLimitsJsonld.md)
- [Definition](docs/Definition.md)
- [DefinitionDefinitionRead](docs/DefinitionDefinitionRead.md)
- [DefinitionDefinitionWrite](docs/DefinitionDefinitionWrite.md)
- [DefinitionDefinitionWriteJsonMergePatch](docs/DefinitionDefinitionWriteJsonMergePatch.md)
- [DefinitionEntityReadEntityReadParent](docs/DefinitionEntityReadEntityReadParent.md)
- [DefinitionJsonapi](docs/DefinitionJsonapi.md)
- [DefinitionJsonapiData](docs/DefinitionJsonapiData.md)
- [DefinitionJsonapiDataRelationships](docs/DefinitionJsonapiDataRelationships.md)
- [DefinitionJsonapiDataRelationshipsParentEntity](docs/DefinitionJsonapiDataRelationshipsParentEntity.md)
- [DefinitionJsonapiDataRelationshipsParentEntityData](docs/DefinitionJsonapiDataRelationshipsParentEntityData.md)
- [DefinitionJsonhalDefinitionRead](docs/DefinitionJsonhalDefinitionRead.md)
- [DefinitionJsonhalDefinitionWrite](docs/DefinitionJsonhalDefinitionWrite.md)
- [DefinitionJsonldDefinitionRead](docs/DefinitionJsonldDefinitionRead.md)
- [DefinitionJsonldEntityReadEntityReadParent](docs/DefinitionJsonldEntityReadEntityReadParent.md)
- [Entity](docs/Entity.md)
- [EntityDefinitionRead](docs/EntityDefinitionRead.md)
- [EntityEntityCreate](docs/EntityEntityCreate.md)
- [EntityEntityReadEntityReadParent](docs/EntityEntityReadEntityReadParent.md)
- [EntityEntityUpdateJsonMergePatch](docs/EntityEntityUpdateJsonMergePatch.md)
- [EntityJsonapi](docs/EntityJsonapi.md)
- [EntityJsonapiData](docs/EntityJsonapiData.md)
- [EntityJsonapiDataRelationships](docs/EntityJsonapiDataRelationships.md)
- [EntityJsonhalEntityCreate](docs/EntityJsonhalEntityCreate.md)
- [EntityJsonhalEntityReadEntityReadParent](docs/EntityJsonhalEntityReadEntityReadParent.md)
- [EntityJsonldDefinitionRead](docs/EntityJsonldDefinitionRead.md)
- [EntityJsonldEntityReadEntityReadParent](docs/EntityJsonldEntityReadEntityReadParent.md)
- [ErrorJsonld](docs/ErrorJsonld.md)
- [HalCollectionBaseSchema](docs/HalCollectionBaseSchema.md)
- [HalCollectionBaseSchemaAllOfLinks](docs/HalCollectionBaseSchemaAllOfLinks.md)
- [HalCollectionBaseSchemaAllOfLinksFirst](docs/HalCollectionBaseSchemaAllOfLinksFirst.md)
- [HalCollectionBaseSchemaNoPagination](docs/HalCollectionBaseSchemaNoPagination.md)
- [HalCollectionBaseSchemaNoPaginationEmbedded](docs/HalCollectionBaseSchemaNoPaginationEmbedded.md)
- [HalCollectionBaseSchemaNoPaginationEmbeddedAnyOf](docs/HalCollectionBaseSchemaNoPaginationEmbeddedAnyOf.md)
- [HalCollectionBaseSchemaNoPaginationLinks](docs/HalCollectionBaseSchemaNoPaginationLinks.md)
- [HydraCollectionBaseSchema](docs/HydraCollectionBaseSchema.md)
- [HydraCollectionBaseSchemaAllOfView](docs/HydraCollectionBaseSchemaAllOfView.md)
- [HydraCollectionBaseSchemaNoPagination](docs/HydraCollectionBaseSchemaNoPagination.md)
- [HydraCollectionBaseSchemaNoPaginationSearch](docs/HydraCollectionBaseSchemaNoPaginationSearch.md)
- [HydraCollectionBaseSchemaNoPaginationSearchMappingInner](docs/HydraCollectionBaseSchemaNoPaginationSearchMappingInner.md)
- [HydraItemBaseSchema](docs/HydraItemBaseSchema.md)
- [HydraItemBaseSchemaContext](docs/HydraItemBaseSchemaContext.md)
- [HydraItemBaseSchemaContextOneOf](docs/HydraItemBaseSchemaContextOneOf.md)
- [JsonApiCollectionBaseSchema](docs/JsonApiCollectionBaseSchema.md)
- [JsonApiCollectionBaseSchemaAllOfLinks](docs/JsonApiCollectionBaseSchemaAllOfLinks.md)
- [JsonApiCollectionBaseSchemaAllOfMeta](docs/JsonApiCollectionBaseSchemaAllOfMeta.md)
- [JsonApiCollectionBaseSchemaNoPagination](docs/JsonApiCollectionBaseSchemaNoPagination.md)
- [JsonApiCollectionBaseSchemaNoPaginationLinks](docs/JsonApiCollectionBaseSchemaNoPaginationLinks.md)
- [JsonApiCollectionBaseSchemaNoPaginationMeta](docs/JsonApiCollectionBaseSchemaNoPaginationMeta.md)
- [ModelError](docs/ModelError.md)
- [Oauth2Jwks200Response](docs/Oauth2Jwks200Response.md)
- [Oauth2Jwks200ResponseKeysInner](docs/Oauth2Jwks200ResponseKeysInner.md)
- [Oauth2Metadata200Response](docs/Oauth2Metadata200Response.md)
- [Oauth2Register201Response](docs/Oauth2Register201Response.md)
- [Oauth2Register400Response](docs/Oauth2Register400Response.md)
- [Oauth2RegisterRequest](docs/Oauth2RegisterRequest.md)
- [Oauth2Token200Response](docs/Oauth2Token200Response.md)
- [Oauth2TokenExchange200Response](docs/Oauth2TokenExchange200Response.md)
- [PersonalAccessToken](docs/PersonalAccessToken.md)
- [PersonalAccessTokenJsonapi](docs/PersonalAccessTokenJsonapi.md)
- [PersonalAccessTokenJsonapiData](docs/PersonalAccessTokenJsonapiData.md)
- [PersonalAccessTokenJsonhalPersonalAccessTokenRead](docs/PersonalAccessTokenJsonhalPersonalAccessTokenRead.md)
- [PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead](docs/PersonalAccessTokenJsonhalPersonalAccessTokenReadPersonalAccessTokenCreateRead.md)
- [PersonalAccessTokenJsonhalPersonalAccessTokenWrite](docs/PersonalAccessTokenJsonhalPersonalAccessTokenWrite.md)
- [PersonalAccessTokenJsonldPersonalAccessTokenRead](docs/PersonalAccessTokenJsonldPersonalAccessTokenRead.md)
- [PersonalAccessTokenJsonldPersonalAccessTokenReadPersonalAccessTokenCreateRead](docs/PersonalAccessTokenJsonldPersonalAccessTokenReadPersonalAccessTokenCreateRead.md)
- [PersonalAccessTokenPersonalAccessTokenRead](docs/PersonalAccessTokenPersonalAccessTokenRead.md)
- [PersonalAccessTokenPersonalAccessTokenReadPersonalAccessTokenCreateRead](docs/PersonalAccessTokenPersonalAccessTokenReadPersonalAccessTokenCreateRead.md)
- [PersonalAccessTokenPersonalAccessTokenWrite](docs/PersonalAccessTokenPersonalAccessTokenWrite.md)
- [PersonalAccessTokenPersonalAccessTokenWriteJsonMergePatch](docs/PersonalAccessTokenPersonalAccessTokenWriteJsonMergePatch.md)
- [User](docs/User.md)
- [UserJsonapi](docs/UserJsonapi.md)
- [UserJsonapiData](docs/UserJsonapiData.md)
- [UserJsonhal](docs/UserJsonhal.md)
- [UserJsonhalUserCreate](docs/UserJsonhalUserCreate.md)
- [UserJsonhalUserEmpty](docs/UserJsonhalUserEmpty.md)
- [UserJsonhalUserRead](docs/UserJsonhalUserRead.md)
- [UserJsonhalUserResendActivation](docs/UserJsonhalUserResendActivation.md)
- [UserJsonhalUserResetPassword](docs/UserJsonhalUserResetPassword.md)
- [UserJsonhalUserSendResetPassword](docs/UserJsonhalUserSendResetPassword.md)
- [UserJsonld](docs/UserJsonld.md)
- [UserJsonldUserEmpty](docs/UserJsonldUserEmpty.md)
- [UserJsonldUserRead](docs/UserJsonldUserRead.md)
- [UserUserCreate](docs/UserUserCreate.md)
- [UserUserRead](docs/UserUserRead.md)
- [UserUserResendActivation](docs/UserUserResendActivation.md)
- [UserUserResetPassword](docs/UserUserResetPassword.md)
- [UserUserSendResetPassword](docs/UserUserSendResetPassword.md)
- [UserUserUpdateJsonMergePatch](docs/UserUserUpdateJsonMergePatch.md)

### Authorization


Authentication schemes defined for the API:
<a id="access_token"></a>
#### access_token


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.0.0`
- Package version: `0.0.0`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
