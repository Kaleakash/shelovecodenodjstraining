let mongoose = require("mongoose");
let url = "mongodb://127.0.0.1:27017/mydb"; // it contains url details with database name. 
mongoose.set('strictQuery', false);

let dbConnection = mongoose.connect(url).then(res=>console.log("db connected")).catch(error=>console.log("error generated"));


exports.adminAccount = function() {
        // can we write to create accont for admin as 
        // emailid as admin@gmail.com, password admin@123, typeofuser = admin
}
module.exports = dbConnection;

