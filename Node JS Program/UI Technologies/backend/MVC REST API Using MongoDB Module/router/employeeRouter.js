let express = require("express");
let router = express.Router();
let employeeController = require("../controller/employeeController")

// http://localhost:3000/api/employees/getEmployee 

router.get("/getEmployee",employeeController.getAllEmployees);

// http://localhost:3000/api/employees/findEmployeeById/1
// http://localhost:3000/api/employees/findEmployeeById/7

router.get("/findEmployeeById/:_id",employeeController.findEmployeeById);

// http://localhost:3000/api/employees/storeEmployee 
router.post("/storeEmployee",employeeController.storeEmployee);


// http://localhost:3000/api/employees/deleteEmployeeById/1 
router.delete("/deleteEmployeeById/:_id",employeeController.deleteEmployee);


// http://localhost:3000/api/employees/updateEmployeeSalary
router.patch("/updateEmployeeSalary",employeeController.updateEmployee);

module.exports=router;