let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");
let authToken = require("../config/authToken");


router.get("/findAllStudents",authToken.verifyUserToken,authToken.isStudentOrAdmin,studentController.findAllStudents);


router.post("/storeStudent",authToken.verifyUserToken,authToken.isStudentOrAdmin,studentController.storeStudentInfo);

router.get("/findStudentById/:_id",authToken.verifyUserToken,studentController.findStudentById)
router.get("/findStudentByName/:fname",authToken.verifyUserToken,studentController.findStudentByName)
router.patch("/updateStudentGrade",authToken.verifyUserToken,studentController.updateStudentGrade);
router.delete("/deleteStudentById/:_id",authToken.verifyUserToken,studentController.deleteStudentById);

module.exports=router;