
const express = require ("express");

const router = express.Router();

const {getDashboardStats} = require("../controllers/dashboard.controller");

const authMiddleware = require("../middleware/auth.middleware.js");

const roleMiddleware = require("../middleware/role.middleware.js");

router.get("/",authMiddleware, roleMiddleware(["Admin","Trainer"]),getDashboardStats);

module.exports=router;