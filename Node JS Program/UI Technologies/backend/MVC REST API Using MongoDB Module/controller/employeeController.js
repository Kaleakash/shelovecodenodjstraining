let empCollection = require("../config/dbConfig");

exports.getAllEmployees = async (request,response)=> {
    let result = await empCollection.getCollection().find().toArray();
    response.json(result);
}