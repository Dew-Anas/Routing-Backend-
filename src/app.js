const express = require("express");

const studentRoutes = require("./routes/student.routes");
const courseRoutes = require("./routes/course.routes");

const trainerRouters = require("./routes/trainer.routes");

const taskRoutes = require("./routes/task.routes");
const app = express();

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/trainers",trainerRouters);
app.use("/api/tasks", taskRoutes);

module.exports = app;