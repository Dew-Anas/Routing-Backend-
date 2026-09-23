

const express = require("express");
const router = express.Router();

const{getStudents,addStudent,createStudent}
=require("../controllers/student.controller");

router.get("/",getStudents);

router.post("/",createStudent);



module.exports=router;