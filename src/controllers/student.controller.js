
const Student = require("../models/student.model");



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



const addStudent =(req,res)=>{
    res.json({
        message:"Student Added Succesfully"
    });

};

const getStudents= async(req,res)=>{
    const students = await Student.find();
    res.status(200).json({
        success:true,
        count:students.length,
        data:students

    });

};

const getStudentById = async(req,res)=>{
    const{id}=req.params;

    const student = await Student.findById(id);
    if(!student){
        return res.status(404).json({
            success:false,
            message:"Student not found"
        });
    };

     return res.status(200).json({
             success:true,
             data:student
        });


};

module.exports={getStudents,addStudent,createStudent,getStudentById};