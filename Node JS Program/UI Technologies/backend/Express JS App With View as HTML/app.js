const { response } = require("express");
let express = require("express");

let app = express();


// http://localhost:3000
app.get("/",(request,response)=> {
    //response.send("Welcome to Express JS");
    //response.sendFile("index.html");
   // response.sendFile("C:\\Users\\LENOVO\\OneDrive\\Desktop\\Node JS Training\\Node JS Program\\UI Technologies\\backend\\Express JS App With View as HTML\\index.html");
    //response.send(__dirname);   // this property help use to get the current path of the application. 
    response.sendFile(__dirname+"\\index.html");
})


app.get("/aboutus",(request,response)=> {
    response.sendFile(__dirname+"\\aboutus.html");
})

app.get("/contactus",(request,response)=> {
    response.sendFile(__dirname+"\\contactus.html");
})

app.get("/login",(request,response)=> {
    response.sendFile(__dirname+"\\login.html");
})

app.get("/signIn",(request,response)=> {
    let email = request.query.email;            // receive email field from form 
    let password = request.query.password;         // recevie password field from form 
    console.log(email+" "+password);
    if(email=="raj@gmail.com" && password=="123"){
        response.send("successfully login");
    }else {
        response.send("Failure try once again");
    }
    // response.send("done!")
})


app.listen(3000,()=>console.log("server running on port nubmber 3000"));