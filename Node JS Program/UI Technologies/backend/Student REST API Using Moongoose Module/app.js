let express  = require("express");
let app  = express();
let dbConfig = require("./config/dbConfig");
let studentRouter = require("./router/studentRouter");

dbConfig.dbConnection;  // calling this variable to get the connection 

app.use(express.json());




app.use("/api/students",studentRouter);




app.listen(3000,()=>console.log("server running on port number 3000"));