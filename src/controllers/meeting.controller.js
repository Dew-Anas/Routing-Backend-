const Meeting = require("../models/meeting.model");

const createMeeting = async (req, res) => {
    const {
        studentId,
        meetingTitle,
        meetingDate,
        meetingTime,
        meetingType,
        meetingLink,
        status
    } = req.body;

    try {
        const meeting = await Meeting.create({
            studentId,
            meetingTitle,
            meetingDate,
            meetingTime,
            meetingType,
            meetingLink,
            status
        });

        res.status(201).json({
            success: true,
            message: "Meeting created successfully",
            data: meeting
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating meeting"
        });
    }
};

const getMeetings = async (req, res) => {
    try {

        console.log("Logged User:", req.user);

    let meetings;

    if(req.user.role ==="Student"){
        meetings = await Meeting.find({ studentId: req.user.id });
    } else {
        meetings = await Meeting.find();
    }

    res.status(200).json({
        success: true,
        count: meetings.length,
        data: meetings
    });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving meetings"
        });
    }
};

const getMeetingById = async (req, res) => {
    const{id}=req.params;
try{

    const meeting= await Meeting.findById(id);
    

    if(!meeting){
        return res.status(404).json({
            success:false,
            message:"Meeting not found"
        });
    }

    if(req.user.role ==="Student"){
        if(meeting.studentId.toString() !== req.user.id){
            return res.status(403).json({
            success: false,
            message: "Access Denied. You can only view your own meetings"
        });
    }

    }

    res.status(200).json({
            success:true,
            data:meeting
        });

}catch(error){
    console.log(error);
    res.status(500).json({
        success:false,
        message:"Error retrieving meeting"
    });
}
};

const updateMeeting = async (req, res) => {
    const { id } = req.params;

    const{meetingTitle,meetingDate,meetingTime,meetingType,meetingLink,status}=req.body;

        try{
    const meeting = await Meeting.findByIdAndUpdate(id, {
        meetingTitle,
        meetingDate,
        meetingTime,
        meetingType,
        meetingLink,
        status
    }, 
    { new: true });

    if (!meeting) {
        return res.status(404).json({
            success: false,
            message: "Meeting not found"
        });
    }

    res.status(200).json({
        success: true,
        data: meeting
    });

} catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: "Error updating meeting"});

    }
};

const deleteMeeting = async (req, res) => {

    const { id } = req.params;

    try{

    const meeting = await Meeting.findByIdAndDelete(id);

    if (!meeting) {
        return res.status(404).json({
            success: false,
            message: "Meeting not found"
        });
    }
    res.status(200).json({
        success: true,
        message: "Meeting deleted successfully"
    });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error deleting meeting"
        });
    }

};
        








module.exports = { createMeeting, getMeetings ,getMeetingById,updateMeeting,deleteMeeting};