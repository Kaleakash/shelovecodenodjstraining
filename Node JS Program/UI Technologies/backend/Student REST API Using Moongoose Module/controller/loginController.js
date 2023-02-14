let loginModel = require("../model/loginModel");
let bcrypt = require("bcryptjs");

async function convertPasswordInHash(password){
let salt = await bcrypt.genSalt();      // by default round 10 
let hashPassword  = await bcrypt.hash(password,salt);   // it will convert password in hash
return hashPassword;
}
async function convertPasswordInHash(password,hashPassword){
    let myHashConvertPassword = await bcrypt.compare(password,hashPassword);
    console.log(myHashConvertPassword);
    return myHashConvertPassword;
}

let signUp = async (request,response)=> {
    let login = request.body;
    try{
    if(login.typeofuser =="admin"){
        response.jsong({"msg":"Admin account can't create"})
    }else {
        console.log(login);
        // emailid,password, typeofuser;
        login.password = convertPasswordInHash(login.password);
        let result  = await loginModel.insertMany(login);
        if(result!=null){
            response.send({"msg":"Student Account created"});
        }
    }
    }catch(ex){
        //console.log(ex)
        //response.json(ex);
        response.json({"msg":"EmailId must be unqiue"});
    }
}
let signIn = async (request,response)=> {
    let login = request.body;
    try{
        // using emailid get hashPassword from database. 
        // then call convertPasswordInHash(login.password,hashpassword)
        // if true then do the task or else return failure. 
    let result  = await loginModel.findOne({emailid:login.emailid,password:login.password,typeofuser:login.typeofuser});
    //response.json(result); 
    if(result==null){
        response.json({"msg":"Emailid or password is wrong or type of user may be wrong"})
    }else if(result.typeofuser=="admin"){
        response.json({"msg":"Admin login successfully"})
    }else {
        response.json({"msg":"Student login successfully"})
    }
    
    }catch(ex){
        response.json(ex);
    }
}

module.exports = {signUp,signIn};


