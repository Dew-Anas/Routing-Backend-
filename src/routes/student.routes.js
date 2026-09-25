

const express = require("express");
const router = express.Router();

const{getStudents,addStudent,createStudent,getStudentById, updateStudents}
=require("../controllers/student.controller");

router.get("/",getStudents);

router.get("/:id",getStudentById);

router.post("/",createStudent);

router.put("/:id",updateStudents)





module.exports=router;