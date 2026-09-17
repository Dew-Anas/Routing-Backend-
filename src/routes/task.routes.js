
const express =require("express");

const router = express.Router();

const { getTasks, addTasks }
  = require("../controllers/task.controller");

router.get("/", getTasks);
router.post("/", addTasks);

module.exports = router;
