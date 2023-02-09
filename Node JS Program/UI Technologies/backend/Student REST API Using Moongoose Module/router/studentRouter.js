let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");


router.post("/storeStudent",studentController.storeStudentInfo);
router.get("/findAllStudents",studentController.findAllStudents);
router.get("/findStudentById/:_id",studentController.findStudentById)
router.get("/findStudentByName/:fname",studentController.findStudentByName)
router.patch("/updateStudentGrade",studentController.updateStudentGrade);
router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);

module.exports=router;