

const express = require("express");
const router = express.Router();



const{getStudents,addStudent,createStudent,getStudentById, updateStudents,deleteStudent}
=require("../controllers/student.controller");

const authMiddleware = require("../middleware/auth.middleware");



router.get("/",authMiddleware,getStudents);

router.get("/:id",getStudentById);

router.post("/",createStudent);

router.put("/:id",updateStudents);

router.delete("/:id",deleteStudent);





module.exports=router;