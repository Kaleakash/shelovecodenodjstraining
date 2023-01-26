let empCollection = require("../config/dbConfig");

exports.getAllEmployees = async (request,response)=> {
    try{
    let result =await empCollection.getCollection().find().toArray();
    response.json(result);
    }catch(ex){
        response.json({"msg":"Error generated "+ex});
    }
}