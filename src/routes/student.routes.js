

const express = require("express");
const router = express.Router();

const{getStudents,addStudent,createStudent,getStudentById}
=require("../controllers/student.controller");

router.get("/",getStudents);

router.get("/:id",getStudentById);

router.post("/",createStudent);





module.exports=router;