
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const roleMiddleware = require("../middleware/role.middleware");

const {createMeeting,getMeetings,getMeetingById,updateMeeting,deleteMeeting} = require("../controllers/meeting.controller");

router.post("/", authMiddleware, roleMiddleware(["Admin","Trainer"]), createMeeting);

router.get("/",authMiddleware, getMeetings);

router.get("/:id",authMiddleware, getMeetingById);

router.put("/:id", authMiddleware, roleMiddleware(["Admin","Trainer"]), updateMeeting);

router.delete("/:id", authMiddleware, roleMiddleware(["Admin"]), deleteMeeting);


module.exports = router;