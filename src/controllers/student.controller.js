
const Student = require("../models/student.model");

Student.create()

const createStudent= async(req,res)=>{

    try{
        const{name,email,phone,course,age} = req.body;

        const student = await Student.create({
            name,
            email,
            phone,
            course,
            age
        });

        res.status(201).json({
            success:true,
            message :"Student Created Successfully"
        });
    }

    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:"validation faild"
        });

    }

};

const getStudents  = (req,res) => {
    res.json({
        students:[]
    });
};

const addStudent =(req,res)=>{
    res.json({
        message:"Student Added Succesfully"
    });

};

module.exports={getStudents,addStudent,createStudent};