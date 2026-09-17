
const getTrainers=(req,res)=>{
    res.json({
        trainers:[]
    });
};

const addTrainer=(req,res)=>{
    res.json({
        message:"Trainer Added Successfully"
    });
};

module.exports= {getTrainers,addTrainer};

