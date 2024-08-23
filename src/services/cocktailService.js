import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1", // Your region
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:6d68dff8-129f-4926-9fd3-1c71dff82254",
  }),
});

const docClient = new AWS.DynamoDB.DocumentClient();

export const fetchAllCocktails = async () => {
  const params = {
    TableName: "bcnCocktails",
  };

  try {
    const data = await docClient.scan(params).promise();
    return data.Items;
  } catch (error) {
    console.error("Error fetching cocktail:", error);
    throw error;
  }
};
