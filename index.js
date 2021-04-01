const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-2" });

const COGNITO = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

exports.handler = async (event) => {
  const { userName, userPoolId } = event;
  const {
    request: { userAttributes },
  } = event;

  let update = {
    userPoolId,
    userName,
    attribute: "seed_phrase",
    value: "act ill etc",
  };
  return await updateCognito(update);
};

const updateCognito = async ({ userPoolId, userName, attribute, value }) => {
  const updatedUser = await COGNITO.adminUpdateUserAttributes({
    UserAttributes: [
      {
        Name: `custom:${attribute}`,
        Value: value,
      },
    ],
    UserPoolId: userPoolId,
    Username: userName,
  }).promise();
  return updatedUser;
};
