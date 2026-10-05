
const Attendance = require("../models/attendance.model");


const checkIn = async(req,res)=>{
    const{studentId}= req.body;

    const date = new Date();

    const checkIn=new Date().toTimeString();

    const attendance=await Attendance.create({
        studentId,
        date,
        checkIn
    });

    res.status(201).json({
        success:true,
        message:"Check In Successful"
    });

};

const checkOut = async(req,res)=>{
    const{studentId}= req.body;

    const checkOut=new Date().toTimeString();

    const attendance = await Attendance.findOneAndUpdate(
        { studentId },
        { checkOut },
        { new: true }
    );


    res.status(200).json({
        success:true,
        message:"Check Out Successful"
    });
};

const getAllAttendance = async(req,res)=>{
    const attendance = await Attendance.find();

    res.status(200).json({
        success:true,
        data:attendance
    });

};

module.exports={
    checkIn,
    checkOut,
    getAllAttendance
};