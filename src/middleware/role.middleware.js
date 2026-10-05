
const roleMiddleware=(allowedRole)=>{

return (req,res,next)=>{
    if(allowedRole.includes(req.user.role)){
    next()
    }else{
        res.status(403).json(
            {
                success:false,

                message:"Access Denied.Admin privileges required"
            
            })
        }
    }
};

module.exports=roleMiddleware;

