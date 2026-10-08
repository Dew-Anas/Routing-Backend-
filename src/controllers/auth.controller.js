

const User = require("../models/user.model");

const bcrypt =require("bcrypt");

const jwt = require("jsonwebtoken");



const login= async(req,res)=>{


    const {email,password} = req.body;

    console.log("Login email:", email);

    const user = await User.findOne({email});

    console.log("User found:", user);

    console.log("Users count:", await User.countDocuments());

    if(!email)
        return res.status(400).json({
            success:false,
            message:"Email is required"});


    if(!password)
        return res.status(400).json({
                success:false,
                message:"password required"});

    
    if(!user)
        return res.status(404).json({
            success:false,
            message:"user not found"});

           

          const isMatch =await bcrypt.compare(password,user.password); 
          
          if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"invalid password"
            })
           };

           const token= jwt.sign(
            {
                id:user._id,
                email:user.email,
                role:user.role
            },
                process.env.JWT_SECRET
           );

            return res.status(200).json({
                success:true,
                message:"Login Successfull",
                token:token
            });
};

const registerUser=async(req,res)=>{

    try{
    const{name,email,password,role}= req.body;

    if(password.length<6){
        return res.status(400).json({
            success:false,
            message:"password should have minimum 6 characters"
        });

        
    };

    if(!name){
        return res.status(400).json({
            success:false,
            message:"Name is required"
        });

    }

    if(!email){
        return res.status(400).json({
            success:false,
            message:"email is required"
        });
    }


    if(role!=="Admin" && role!== "Student"&&role!=="Trainer"){
            return res.status(400).json({
                    success:false,
                    message:"Role must be Admin, Student or Trainer"
            });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password:hashedPassword,
        role
    });

    
    

     return res.status(201).json({
        success:true,
        message:"User registered successfully"
     })
    }

    catch(error){
        console.log(error);

        if (error.code===11000){
            return res.status(400).json({
                success:false,
                message:"Email already exists"
            })
        }
       return res.status(500).json({
            success:false,
            message:"something went wrong"
        })

    }

    

};



module.exports = { login,registerUser };