let jwt = require("jsonwebtoken");


exports.verifyUserToken = (request,response,next)=> {
    try{
    let token = request.headers.authorization;
    if(token==undefined){
        response.json({
            "msg":"Unathorized request or user"
        })
    }else {
        let verifyToken = jwt.verify(token,"secretKey");
        //console.log(verifyToken);
        next();
    }
}catch(ex){
    response.json({
        "msg":"Invalid token "+ex
    })
}
    
}