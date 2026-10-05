const jwt = require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    

    
    const authHeader = req.headers.authorization;


    if(!authHeader){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        });
    }

    const token = authHeader.split("Bearer ")[1];

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        });
    
}
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded) =>{

        if(err){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            });
        }
        req.user = decoded;

        next();

        

}
);
};

module.exports=authMiddleware;