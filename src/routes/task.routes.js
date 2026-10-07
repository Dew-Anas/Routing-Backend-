
const express =require("express");

const router = express.Router();

const{createTask,getTasks,getTaskById,updateTask}=require("../controllers/task.controller");

const authMiddleware = require("../middleware/auth.middleware");

const roleMiddleware = require("../middleware/role.middleware");

router.post("/", authMiddleware, roleMiddleware(["Admin","Trainer"]), createTask);

router.get("/",authMiddleware ,getTasks);
router.get("/:id", getTaskById);
router.put("/:id",authMiddleware, updateTask);

module.exports = router;
