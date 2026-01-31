# JsonHubApi.UserApi

All URIs are relative to *https://api.jsonhub.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersIdDelete**](UserApi.md#apiUsersIdDelete) | **DELETE** /api/users/{id} | Removes the user resource.
[**apiUsersIdPatch**](UserApi.md#apiUsersIdPatch) | **PATCH** /api/users/{id} | Updates the user resource.
[**apiUsersPost**](UserApi.md#apiUsersPost) | **POST** /api/users | Creates a user resource.
[**apiUsersresendActivationPost**](UserApi.md#apiUsersresendActivationPost) | **POST** /api/users/resend-activation | Resend activation email
[**apiUsersresetPasswordPost**](UserApi.md#apiUsersresetPasswordPost) | **POST** /api/users/reset-password | Reset password (with token)
[**apiUserssendResetPasswordPost**](UserApi.md#apiUserssendResetPasswordPost) | **POST** /api/users/send-reset-password | Send reset password email



## apiUsersIdDelete

> apiUsersIdDelete(id)

Removes the user resource.

Removes the user resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.UserApi();
let id = "id_example"; // String | user identifier
apiInstance.apiUsersIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| user identifier | 

### Return type

null (empty response body)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiUsersIdPatch

> UserJsonldUserEmpty apiUsersIdPatch(id, userUserUpdate)

Updates the user resource.

Updates the user resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';
let defaultClient = JsonHubApi.ApiClient.instance;
// Configure Bearer access token for authorization: access_token
let access_token = defaultClient.authentications['access_token'];
access_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new JsonHubApi.UserApi();
let id = "id_example"; // String | user identifier
let userUserUpdate = new JsonHubApi.UserUserUpdate(); // UserUserUpdate | The updated user resource
apiInstance.apiUsersIdPatch(id, userUserUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| user identifier | 
 **userUserUpdate** | [**UserUserUpdate**](UserUserUpdate.md)| The updated user resource | 

### Return type

[**UserJsonldUserEmpty**](UserJsonldUserEmpty.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json


## apiUsersPost

> UserJsonldUserEmpty apiUsersPost(userJsonldUserCreate)

Creates a user resource.

Creates a user resource.

### Example

```javascript
import JsonHubApi from 'json_hub_api';

let apiInstance = new JsonHubApi.UserApi();
let userJsonldUserCreate = new JsonHubApi.UserJsonldUserCreate(); // UserJsonldUserCreate | The new user resource
apiInstance.apiUsersPost(userJsonldUserCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userJsonldUserCreate** | [**UserJsonldUserCreate**](UserJsonldUserCreate.md)| The new user resource | 

### Return type

[**UserJsonldUserEmpty**](UserJsonldUserEmpty.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: application/ld+json, application/json


## apiUsersresendActivationPost

> UserJsonld apiUsersresendActivationPost(userJsonldUserResendActivation)

Resend activation email

This endpoint resends the activation email to the user.

### Example

```javascript
import JsonHubApi from 'json_hub_api';

let apiInstance = new JsonHubApi.UserApi();
let userJsonldUserResendActivation = new JsonHubApi.UserJsonldUserResendActivation(); // UserJsonldUserResendActivation | The new user resource
apiInstance.apiUsersresendActivationPost(userJsonldUserResendActivation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userJsonldUserResendActivation** | [**UserJsonldUserResendActivation**](UserJsonldUserResendActivation.md)| The new user resource | 

### Return type

[**UserJsonld**](UserJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: application/ld+json, application/json


## apiUsersresetPasswordPost

> UserJsonldUserEmpty apiUsersresetPasswordPost(userJsonldUserResetPassword)

Reset password (with token)

This endpoint resets the password of the user using the token sent by email.

### Example

```javascript
import JsonHubApi from 'json_hub_api';

let apiInstance = new JsonHubApi.UserApi();
let userJsonldUserResetPassword = new JsonHubApi.UserJsonldUserResetPassword(); // UserJsonldUserResetPassword | The new user resource
apiInstance.apiUsersresetPasswordPost(userJsonldUserResetPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userJsonldUserResetPassword** | [**UserJsonldUserResetPassword**](UserJsonldUserResetPassword.md)| The new user resource | 

### Return type

[**UserJsonldUserEmpty**](UserJsonldUserEmpty.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: application/ld+json, application/json


## apiUserssendResetPasswordPost

> UserJsonldUserEmpty apiUserssendResetPasswordPost(userJsonldUserSendResetPassword)

Send reset password email

This endpoint sends a reset password email to the user.

### Example

```javascript
import JsonHubApi from 'json_hub_api';

let apiInstance = new JsonHubApi.UserApi();
let userJsonldUserSendResetPassword = new JsonHubApi.UserJsonldUserSendResetPassword(); // UserJsonldUserSendResetPassword | The new user resource
apiInstance.apiUserssendResetPasswordPost(userJsonldUserSendResetPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userJsonldUserSendResetPassword** | [**UserJsonldUserSendResetPassword**](UserJsonldUserSendResetPassword.md)| The new user resource | 

### Return type

[**UserJsonldUserEmpty**](UserJsonldUserEmpty.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json
- **Accept**: application/ld+json, application/json

