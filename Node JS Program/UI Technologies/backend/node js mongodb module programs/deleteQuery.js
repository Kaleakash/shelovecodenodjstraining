let mongodb = require("mongodb");      
let mongoClient = mongodb.MongoClient; 

var dbName  ="mydb";

let url ="mongodb://127.0.0.1:27017";   
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("database connected successfully")

        // delete one 
        // let db = client.db(dbName);    // it connect to database 
        // db.collection("Employees").deleteOne({_id:2},(err1,result)=> {
        //     if(!err1){
        //         if(result.deletedCount>0){
        //             console.log("Record deleted successfully")
        //         }else {
        //             console.log("Record not present")
        //         }
        //     }else {
        //         console.log(err1);
        //     }
        //     client.close();
        // })

                // delete many 
        // let db = client.db(dbName);    // it connect to database 
        // db.collection("Employees").deleteMany({salary:{$gt:30000}},(err1,result)=> {
        //     if(!err1){
        //         if(result.deletedCount>0){
        //             console.log("Record deleted successfully")
        //         }else {
        //             console.log("Record not present")
        //         }
        //     }else {
        //         console.log(err1);
        //     }
        //     client.close();
        // })
        
        let db = client.db(dbName);    // it connect to database 
        db.collection("Employees").deleteMany({$or:[{_id:3},{_id:6}]},(err1,result)=> {
            if(!err1){
                if(result.deletedCount>0){
                    console.log("Record deleted successfully")
                }else {
                    console.log("Record not present")
                }
            }else {
                console.log(err1);
            }
            client.close();
        })
       
    }else {
        console.log("Error generated "+err);
    }
})


