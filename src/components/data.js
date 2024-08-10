const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "bcnCocktails",
  Key: {
    id: "strDrinks", // Ensure this matches the actual primary key value you want to fetch
  },
};

const getData = () => {
  dynamoDB.get(params, (err, data) => {
    if (err) {
      console.error("Error fetching item: ", err);
    } else {
      console.log("Fetched item: ", data.Item); // This will log the item fetched from DynamoDB
    }
  });
};

getData();
