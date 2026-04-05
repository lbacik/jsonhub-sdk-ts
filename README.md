# jsonhub-sdk@1.0.0

A TypeScript SDK client for the api.jsonhub.orb.local API.

## Usage

First, install the SDK from npm.

```bash
npm install jsonhub-sdk --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://api.jsonhub.orb.local*

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
*Oauth2Api* | [**apiOauth2tokenPost**](docs/Oauth2Api.md#apioauth2tokenpost) | **POST** /api/oauth2/token | Retrieve an OAuth2 Token
*UserApi* | [**apiUsersIdDelete**](docs/UserApi.md#apiusersiddelete) | **DELETE** /api/users/{id} | Removes the user resource.
*UserApi* | [**apiUsersIdPatch**](docs/UserApi.md#apiusersidpatch) | **PATCH** /api/users/{id} | Updates the user resource.
*UserApi* | [**apiUsersPost**](docs/UserApi.md#apiuserspost) | **POST** /api/users | Creates a user resource.
*UserApi* | [**apiUsersresendActivationPost**](docs/UserApi.md#apiusersresendactivationpost) | **POST** /api/users/resend-activation | Resend activation email
*UserApi* | [**apiUsersresetPasswordPost**](docs/UserApi.md#apiusersresetpasswordpost) | **POST** /api/users/reset-password | Reset password (with token)
*UserApi* | [**apiUserssendResetPasswordPost**](docs/UserApi.md#apiuserssendresetpasswordpost) | **POST** /api/users/send-reset-password | Send reset password email


### Models

- [ApiDefinitionsGetCollection200Response](docs/ApiDefinitionsGetCollection200Response.md)
- [ApiDefinitionsGetCollection200Response1](docs/ApiDefinitionsGetCollection200Response1.md)
- [ApiDefinitionsGetCollection200Response1Embedded](docs/ApiDefinitionsGetCollection200Response1Embedded.md)
- [ApiDefinitionsGetCollection200Response1EmbeddedAnyOf](docs/ApiDefinitionsGetCollection200Response1EmbeddedAnyOf.md)
- [ApiDefinitionsGetCollection200Response1Links](docs/ApiDefinitionsGetCollection200Response1Links.md)
- [ApiDefinitionsGetCollection200Response1LinksSelf](docs/ApiDefinitionsGetCollection200Response1LinksSelf.md)
- [ApiDefinitionsGetCollection200ResponseHydraSearch](docs/ApiDefinitionsGetCollection200ResponseHydraSearch.md)
- [ApiDefinitionsGetCollection200ResponseHydraSearchHydraMappingInner](docs/ApiDefinitionsGetCollection200ResponseHydraSearchHydraMappingInner.md)
- [ApiDefinitionsGetCollection200ResponseHydraView](docs/ApiDefinitionsGetCollection200ResponseHydraView.md)
- [ApiEntitiesGetCollection200Response](docs/ApiEntitiesGetCollection200Response.md)
- [ApiEntitiesGetCollection200Response1](docs/ApiEntitiesGetCollection200Response1.md)
- [ApiEntitiesGetCollection200Response1Embedded](docs/ApiEntitiesGetCollection200Response1Embedded.md)
- [ApiEntitiesGetCollection200Response1EmbeddedAnyOf](docs/ApiEntitiesGetCollection200Response1EmbeddedAnyOf.md)
- [DefinitionDefinitionRead](docs/DefinitionDefinitionRead.md)
- [DefinitionDefinitionWrite](docs/DefinitionDefinitionWrite.md)
- [DefinitionEntityReadEntityReadParent](docs/DefinitionEntityReadEntityReadParent.md)
- [DefinitionJsonapi](docs/DefinitionJsonapi.md)
- [DefinitionJsonapiData](docs/DefinitionJsonapiData.md)
- [DefinitionJsonapiDataAttributes](docs/DefinitionJsonapiDataAttributes.md)
- [DefinitionJsonhalDefinitionRead](docs/DefinitionJsonhalDefinitionRead.md)
- [DefinitionJsonhalDefinitionReadLinks](docs/DefinitionJsonhalDefinitionReadLinks.md)
- [DefinitionJsonhalDefinitionWrite](docs/DefinitionJsonhalDefinitionWrite.md)
- [DefinitionJsonhalEntityReadEntityReadParent](docs/DefinitionJsonhalEntityReadEntityReadParent.md)
- [DefinitionJsonldDefinitionRead](docs/DefinitionJsonldDefinitionRead.md)
- [DefinitionJsonldDefinitionReadContext](docs/DefinitionJsonldDefinitionReadContext.md)
- [DefinitionJsonldDefinitionReadContextOneOf](docs/DefinitionJsonldDefinitionReadContextOneOf.md)
- [DefinitionJsonldDefinitionWrite](docs/DefinitionJsonldDefinitionWrite.md)
- [DefinitionJsonldEntityReadEntityReadParent](docs/DefinitionJsonldEntityReadEntityReadParent.md)
- [EntityDefinitionRead](docs/EntityDefinitionRead.md)
- [EntityEntityCreate](docs/EntityEntityCreate.md)
- [EntityEntityReadEntityReadParent](docs/EntityEntityReadEntityReadParent.md)
- [EntityEntityUpdate](docs/EntityEntityUpdate.md)
- [EntityJsonapi](docs/EntityJsonapi.md)
- [EntityJsonhalDefinitionRead](docs/EntityJsonhalDefinitionRead.md)
- [EntityJsonhalEntityCreate](docs/EntityJsonhalEntityCreate.md)
- [EntityJsonhalEntityReadEntityReadParent](docs/EntityJsonhalEntityReadEntityReadParent.md)
- [EntityJsonldDefinitionRead](docs/EntityJsonldDefinitionRead.md)
- [EntityJsonldEntityCreate](docs/EntityJsonldEntityCreate.md)
- [EntityJsonldEntityReadEntityReadParent](docs/EntityJsonldEntityReadEntityReadParent.md)
- [Oauth2Jsonapi](docs/Oauth2Jsonapi.md)
- [Oauth2JsonapiData](docs/Oauth2JsonapiData.md)
- [Oauth2JsonapiDataAttributes](docs/Oauth2JsonapiDataAttributes.md)
- [Oauth2JsonhalOauth2Read](docs/Oauth2JsonhalOauth2Read.md)
- [Oauth2JsonhalOauth2Write](docs/Oauth2JsonhalOauth2Write.md)
- [Oauth2JsonldOauth2Read](docs/Oauth2JsonldOauth2Read.md)
- [Oauth2JsonldOauth2Write](docs/Oauth2JsonldOauth2Write.md)
- [Oauth2Oauth2Read](docs/Oauth2Oauth2Read.md)
- [Oauth2Oauth2Write](docs/Oauth2Oauth2Write.md)
- [User](docs/User.md)
- [UserJsonapi](docs/UserJsonapi.md)
- [UserJsonapiData](docs/UserJsonapiData.md)
- [UserJsonapiDataAttributes](docs/UserJsonapiDataAttributes.md)
- [UserJsonhal](docs/UserJsonhal.md)
- [UserJsonhalUserCreate](docs/UserJsonhalUserCreate.md)
- [UserJsonhalUserEmpty](docs/UserJsonhalUserEmpty.md)
- [UserJsonhalUserRead](docs/UserJsonhalUserRead.md)
- [UserJsonhalUserResendActivation](docs/UserJsonhalUserResendActivation.md)
- [UserJsonhalUserResetPassword](docs/UserJsonhalUserResetPassword.md)
- [UserJsonhalUserSendResetPassword](docs/UserJsonhalUserSendResetPassword.md)
- [UserJsonld](docs/UserJsonld.md)
- [UserJsonldUserCreate](docs/UserJsonldUserCreate.md)
- [UserJsonldUserEmpty](docs/UserJsonldUserEmpty.md)
- [UserJsonldUserRead](docs/UserJsonldUserRead.md)
- [UserJsonldUserResendActivation](docs/UserJsonldUserResendActivation.md)
- [UserJsonldUserResetPassword](docs/UserJsonldUserResetPassword.md)
- [UserJsonldUserSendResetPassword](docs/UserJsonldUserSendResetPassword.md)
- [UserUserCreate](docs/UserUserCreate.md)
- [UserUserRead](docs/UserUserRead.md)
- [UserUserResendActivation](docs/UserUserResendActivation.md)
- [UserUserResetPassword](docs/UserUserResetPassword.md)
- [UserUserSendResetPassword](docs/UserUserSendResetPassword.md)
- [UserUserUpdate](docs/UserUserUpdate.md)

### Authorization


Authentication schemes defined for the API:
<a id="access_token"></a>
#### access_token


- **Type**: HTTP Bearer Token authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.8.15`
- Package version: `1.0.0`
- Generator version: `7.19.0`
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
