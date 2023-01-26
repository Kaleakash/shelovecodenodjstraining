let empCollection = require("../config/dbConfig");

exports.getAllEmployees = async (request,response)=> {
    try{
    let result =await empCollection.getCollection().find().toArray();
    response.json(result);
    }catch(ex){
        response.json({"msg":"Error generated "+ex});
    }
}

exports.findEmployeeById = async (request,response)=> {
    let empId = eval(request.params._id);
    try{
        let result =await empCollection.getCollection().findOne({_id:empId});
        if(result==null){
            response.json({"msg":"Record not present with id as "+empId})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}