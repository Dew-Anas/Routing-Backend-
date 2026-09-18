
const errorHandler =(err,req,res,next)=>{
    res.status(500).json({
        success:false,
        message:"Something went wrong"
    });
};

module.exports = errorHandler;