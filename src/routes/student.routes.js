

const express = require("express");
const router = express.Router();



const{getStudents,addStudent,createStudent,getStudentById, updateStudents,deleteStudent}
=require("../controllers/student.controller");

const authMiddleware = require("../middleware/auth.middleware");

const roleMiddleware = require("../middleware/role.middleware");



router.get("/",authMiddleware,getStudents);

router.get("/:id",getStudentById);

router.post("/",
    authMiddleware,
    roleMiddleware(["Admin","Trainer"]),
    createStudent);

router.put("/:id",
    authMiddleware,
    roleMiddleware(["Admin","Trainer"]),
    updateStudents);

router.delete
("/:id",
    authMiddleware,
    roleMiddleware(["Admin"]),
    deleteStudent);





module.exports=router;