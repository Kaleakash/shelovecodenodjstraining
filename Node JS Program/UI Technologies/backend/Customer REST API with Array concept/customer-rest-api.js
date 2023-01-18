let express = require("express");
let app = express();

let cust1 = {cid:100,cname:"Ravi",age:21}
let cust2 = {cid:101,cname:"Ramesh",age:20}
let cust3 = {cid:102,cname:"Rajesh",age:24}
let cust4 = {cid:103,cname:"Lokesh",age:26}
let customers =[];
customers.push(cust1);
customers.push(cust2);
customers.push(cust3);
customers.push(cust4);
// http://localhost:3000/  it will give in text format 

app.get("/",(request,response)=> {
    response.send("welcome to rest api with get method")
})

// http://localhost:3000/getCustomer 

app.get("/getCustomer",(request,response)=> {
    response.json(cust1);
})

// http://localhost:3000/getCustomer 

app.get("/getCustomers",(request,response)=> {
    response.json(customers);
})


// search cusomer using query param 
// http://localhost:3000/searchCustomerByQueryParam?cid=101
app.get("/searchCustomerByQueryParam",(request,response)=> {
  let cid = request.query.cid;
    let result = customers.find(c=>c.cid==cid);
    if(result!=undefined){
        response.json(result);
    }else {
    response.json({"msg":"Record not present"})
    }
})

// search cusomer using query param 
// http://localhost:3000/searchCustomerByPathParam/100
app.get("/searchCustomerByPathParam/:cid",(request,response)=> {
    let cid = request.params.cid;
      let result = customers.find(c=>c.cid==cid);
      if(result!=undefined){
          response.json(result);
      }else {
      response.json({"msg":"Record not present"})
      }
  })

app.listen(3000,()=>console.log("Server running on port number 30000"))