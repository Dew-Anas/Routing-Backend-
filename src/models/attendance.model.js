const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

studentId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
},

date:{
    type:Date,
    required:true
},

checkIn:{
    type:String,
    required:true
},
checkOut:{
    type:String,
    
},

status:{
    type:String,
    default:"Present"
}
});


module.exports=mongoose.model("Attendance", attendanceSchema);