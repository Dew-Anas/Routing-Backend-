
const express = require("express");
const { route } = require("./student.routes");

const router= express.Router();

router.get("/", (req,res)=>{
    res.json({
        message:"Trainer Router Working"
    });
});

module.exports=router;