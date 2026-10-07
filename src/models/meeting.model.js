
const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({

    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },

    meetingTitle:{
        type:String,
        required:true
    },

    meetingDate:{
        type:Date,
        required:true
    },

    meetingTime:{
        type:String,
        required:true
    },

    meetingType:{
        type:String,
        enum:["Online","Offline"],
        required:true
    },

    meetingLink:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Scheduled"
    }
});

module.exports=mongoose.model("Meeting", meetingSchema);