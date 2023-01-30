let studentModel = require("../model/studentModel");


let storeStudentInfo = async (request,response)=> {
    let student = request.body;
    //console.log(student);
    //response.send("done");
    try{
    let result  = await studentModel.insertMany(student);
    response.send(result);
    }catch(ex){
        response.send(ex);
    }
}

let findAllStudents = async(request,response)=> {
    try {
        let result = await studentModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let findStudentById = async (reqeust,response)=> {
    try {
        let sid = reqeust.params._id;
        let result = await studentModel.find({_id:sid});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let updateStudentGrade = async (reqeust,response)=> {
    let student = reqeust.body;
    try{
        let result  = await studentModel.updateOne({_id:student._id},{grade:student.grade})
        //response.send(result);
        if(result.modifiedCount>0){
            response.send("Your grade updated successfully")
        }else if(result.matchedCount>0){
            response.send("Your old grade and new grade is same")
        }else {
            response.send("Student not present");
        }
        }catch(ex){
            response.send(ex);
        }    
}

let deleteStudentById = async (reqeust,response)=> {
    try {
        let sid = reqeust.params._id;
        let result = await studentModel.deleteOne({_id:sid})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("Student details deleted successfully")
        }else {
            response.send("Student not present")
        }
    } catch (error) {
        response.json(error);
    }
}

module.exports = {storeStudentInfo,findAllStudents,findStudentById,updateStudentGrade,deleteStudentById};


