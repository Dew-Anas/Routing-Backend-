

const express = require("express");

const router = express.Router();

const { getCourses, addCourse }
  = require("../controllers/course.controller");

router.get("/", getCourses);
router.post("/", addCourse);

module.exports = router;