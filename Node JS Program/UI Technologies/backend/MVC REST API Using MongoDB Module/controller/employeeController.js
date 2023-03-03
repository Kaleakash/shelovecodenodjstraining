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

exports.storeEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().insertOne(emp);
    //response.send(result);
    if(result){
        response.json({"msg":"record stored successsfully"})
    }
    }catch(ex){
        //response.send(ex);
        response.json({"msg":"record didn't store","error":ex})
    }
}

exports.deleteEmployee = async (request,response)=> {
    let empId = eval(request.params._id);
    try{
    let result  = await empCollection.getCollection().deleteOne({_id:empId});
    //response.send(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with id as "+empId);
    }
    }catch(ex){
        response.send(ex);
    }
}



exports.updateEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().updateOne({_id:emp._id},{$set:{salary:emp.salary}});
    if(result.modifiedCount>0){
        response.send("Salary updated successfully")
    }else if(result.matchedCount>0){
        response.send("salary didn't update becuase old and new salary are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}