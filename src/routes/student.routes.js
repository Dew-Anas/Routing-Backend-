

const express = require("express");
const router = express.Router();

const{getStudents,addStudent,createStudent,getStudentById, updateStudents,deleteStudent}
=require("../controllers/student.controller");

router.get("/",getStudents);

router.get("/:id",getStudentById);

router.post("/",createStudent);

router.put("/:id",updateStudents);

router.delete("/:id",deleteStudent);





module.exports=router;