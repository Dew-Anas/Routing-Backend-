const express = require("express");

const studentRoutes = require("./routes/student.routes");
const courseRoutes = require("./routes/course.routes");

const trainerRouters = require("./routes/trainer.routes");

const taskRoutes = require("./routes/task.routes");

const logger = require("./middleware/logger.middleware");

const errorHandler =require("./middleware/error.middleware");

const app = express();

app.use(logger);
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/trainers",trainerRouters);
app.use("/api/tasks", taskRoutes);

app.get("/test-error",(req,res,next)=>{
    next(new Error("Test error"));
});

app.get("/health", (req, res) => {
    res.json({
        status: "success",
        message: "Server Running Successfully"
    });
});

app.use(errorHandler);


module.exports = app;