let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 

var dbName  ="mydb";

let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")

        let db = client.db(dbName);    // it connect to database 

        // insert one record 

        // let emp = {_id:5,name:"Veeta",age:36,salary:33000};
        // db.collection("Employees").insertOne(emp,(err1,result)=> {
        //     if(!err1){
        //             console.log(result)
        //     }else {
        //             console.log(err1)
        //     }
        //     client.close();
        // })

        // insert Many 
        let emp1 = {_id:6,name:"Leeta",age:28,salary:28000};
        let emp2 = {_id:7,name:"Veeta",age:26,salary:22000}
        db.collection("Employees").insertMany([emp1,emp2],(err1,result)=> {
            if(!err1){
                    console.log(result)
            }else {
                    console.log(err1)
            }
            client.close();
        })
    }else {
        console.log("Error generated "+err);
    }
})


