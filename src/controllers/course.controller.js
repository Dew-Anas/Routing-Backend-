
const getCourses=(req,res)=>{
    res.json({
        courses:[]
    });
};

const addCourse=(req,res)=>{
    res.json({
        message:"Course Added Successfully"
    });
};

module.exports={ getCourses, addCourse};