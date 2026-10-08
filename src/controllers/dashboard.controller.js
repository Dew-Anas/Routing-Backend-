 const Student = require("../models/student.model");

 const Attendance = require("../models/attendance.model");

 const Task = require("../models/task.model");

 const Meeting = require("../models/meeting.model");


const getDashboardStats = async (req, res) => {

    const totalStudents = await Student.countDocuments();

    const activeStudents = await Student.countDocuments({status:"Active"});

    const completedTasks = await Task.countDocuments({status:"Completed"});

    
    const startOfToday = new Date();
    startOfToday.setHours(0,0,0,0);

    const startOfTomorrow = new Date(startOfToday);
    startOfTomorrow.setDate(startOfTomorrow.getDate()+1)

    const todayAttendance = await Attendance.countDocuments({
        date:{
            $gte:startOfToday,
            $lt:startOfTomorrow
        }
    });

    


    const todayMeetings = await Meeting.countDocuments({
        meetingDate:{
            $gte:startOfToday,
            $lt:startOfTomorrow
        }
    });

    const pendingTasks = await Task.countDocuments({status:"Pending"})

    res.status(200).json({
        success:true,
        data:{
            totalStudents,
            activeStudents,
            todayAttendance,
            pendingTasks,
            completedTasks,
            todayMeetings
        }
    });
};


module.exports={getDashboardStats};
