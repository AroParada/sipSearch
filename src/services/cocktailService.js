import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID,
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

export const fetchCocktail = async (drink) => {
  const params = {
    TableName: "bcnCocktails",
    Key: {
      strDrink: drink,
    },
  };

  try {
    const data = await docClient.get(params).promise();
    return data.Item;
  } catch (error) {
    console.log("error fetching cocktail:", error);
    throw error;
  }
};
