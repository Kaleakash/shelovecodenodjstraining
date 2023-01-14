let express = require("express");  // load the module 
let app = express();            // creating reference of express module 

// http://localhost:3000
app.get("/",(request,response)=> {
     response.send("Welcome Express JS Module");
})

// http://localhost:3000/aboutus
app.get("/aboutus",(request,response)=> {
    response.send("Welcome to About Message ");
})

// http://localhost:3000/contactus
app.get("/contactus",(request,response)=> {
    response.send("Contact Us Message ");
})

// http://localhost:3000/feedback
app.get("/feedback",(request,response)=> {
    response.send("Welcome to Feedback Message ");
})


// server running on port number 3000
app.listen(3000,()=>console.log("Server running on port number 3000"));
