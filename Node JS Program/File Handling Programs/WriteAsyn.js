let fs = require("fs");  // load fs module. 
var data = "Welcome Node JS Program";

fs.writeFile("demo.txt",data,(err)=>{
    if(!err){
        console.log("Data stored in file")
    }
})