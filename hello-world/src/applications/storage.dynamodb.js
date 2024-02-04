const {
  dynamoDBGetItem,
  dynamoDBSaveItem,
} = require("../../../src/services/DynamoDB.service.js");

const save = async (body) => {
  try {
    await dynamoDBSaveItem({ Data: body, TableName: "otp" });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const find = async (Search) => {
  try {
    return await dynamoDBGetItem({ Search, TableName: "otp" });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  find,
  save,
};
