
const getTasks =(req, res) =>{
    res.json({
        tasks:[]
    });
};

const addTasks =(req,res)=>{
    res.json({
        message:"Task Added Successfully"
    });
};

module.exports={getTasks,addTasks};