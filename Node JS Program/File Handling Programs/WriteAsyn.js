let fs = require("fs");  // load fs module. 
var data1 = "Welcome to javaScript";

// override the old data 
// fs.writeFile("demo.txt",data,(err)=>{
//     if(!err){
//         console.log("Data stored in file")
//     }
// })

// append the data a: append 
fs.writeFile("demo.txt",data1,{"flag":"a+"},(err)=>{
    if(!err){
        console.log("Data stored in file")
    }
})