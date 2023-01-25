let express = require("express");
let router = express.Router();
let employeeController = require("../controller/employeeController")

// http://localhost:3000/api/employees/getEmployee 

router.get("/getEmployee",employeeController.getAllEmployees);

module.exports=router;