

const User = require("../models/user.model");

const login= async(req,res)=>{


    const {email,password} = req.body;

    console.log("Login email:", email);

    const user = await User.findOne({email});

    console.log("User found:", user);

    console.log("Users count:", await User.countDocuments());

    
    if(!user)
        return res.status(404).json({
            success:false,
            message:"user not found"});

           

           if(password !== user.password) {
            return res.status(401).json({
                success:false,
                message:"invalid password"
            })
           };

            return res.status(200).json({
                success:true,
                message:"Login Successfull"
            });
};

module.exports = { login };