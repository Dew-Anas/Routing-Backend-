
const express =require("express");

const router = express.Router();

const {login,registerUser}= require("../controllers/auth.controller");

router.post("/login",login);
router.post("/register",registerUser)

module.exports= router;