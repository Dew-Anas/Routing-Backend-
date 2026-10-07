
const Task = require("../models/task.model");
const User = require("../models/user.model");


const createTask = async (req, res) => {
        const {title,description,assignedTo,deadline,priority}=req.body;

        const task=await Task.create({
            title,
            description,
            assignedTo,
            deadline,
            priority

        })

        res.status(201).json({
            status:"success",
            message:"Task created successfully",
            data:task
        })


};

const getTasks = async (req, res) => {

    const user = await User.findOne({ email: req.user.email });

   let tasks;
    if (user.role === "Student") {
        tasks = await Task.find({ assignedTo: user._id });
    }

    else{
        tasks = await Task.find();
    }
    res.status(200).json({
        status:"success",
        message:"Tasks retrieved successfully",
        data:tasks
    });

};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
        return res.status(404).json({
            status: "error",
            message: "Task not found"
        });
    }

    res.status(200).json({
        status: "success",
        message: "Task retrieved successfully",
        data: task
    });
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const user = await User.findOne({ email: req.user.email });

    const task = await Task.findById(id);

    if (!task) {
        return res.status(404).json({
            status: "error",
            message: "Task not found"
        });
    }

    

    if (task.assignedTo.toString() !== user._id.toString()) {
        return res.status(403).json({
        status: "error",
        message: "You can only update your own tasks"
    });
    }

        const updatedTask = await Task.findByIdAndUpdate(id, 
        { status },
        {new:true}
    );

    res.status(200).json({
        status: "success",
        message: "Task updated successfully",
        data: updatedTask
    });

    

};



module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask

};