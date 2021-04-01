# Lambda custom attribute confirm signup trigger

Lambda function after user confirms account

### Prerequisites

Add custom user attribute under the cognito menu.

set up trigger, Post Confirmation

Make sure to update your lambda permissions to include

```
cognito-idp:AdminUpdateUserAttributes
```

### Testing

Event example

```json
{
  "version": "1",
  "region": "ap-southeast-2",
  "userPoolId": "${your_userpool_here}",
  "userName": "${username_justcreated_here}",
  "callerContext": {
    "awsSdkVersion": "aws-sdk-java-console",
    "clientId": "12321321321321321"
  },
  "triggerSource": "PostConfirmation_ConfirmSignUp",
  "request": {
    "userAttributes": {
      "sub": "a2c21839-f9fc-49e3-be9a-16f5823d6705",
      "cognito:user_status": "CONFIRMED",
      "email_verified": "true",
      "email": "asdfsdfsgdfg@carbtc.net"
    }
  },
  "response": {}
}
```
