let express = require("express");
let router = express.Router();
let employeeController = require("../controller/employeeController")

// http://localhost:3000/api/employees/getEmployee 

router.get("/getEmployee",employeeController.getAllEmployees);

// http://localhost:3000/api/employees/findEmployeeById/1
// http://localhost:3000/api/employees/findEmployeeById/7

router.get("/findEmployeeById/:_id",employeeController.findEmployeeById);

module.exports=router;