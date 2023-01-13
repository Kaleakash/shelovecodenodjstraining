let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer((request,response)=> {

    let indexPage = fs.readFileSync("index.html");
    response.write(indexPage.toString());
    response.end()
})




server.listen(3000,()=>console.log("Server running on port number 3000"))