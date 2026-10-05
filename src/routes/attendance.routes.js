const express = require("express");
const router =express.Router();

const {checkIn,checkOut,getAllAttendance}=require("../controllers/attendance.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/checkin",authMiddleware,checkIn);

router.post("/checkout",authMiddleware,checkOut);

router.get("/",authMiddleware,getAllAttendance);

module.exports=router;