
const getStudents  = (req,res) => {
    res.json({
        students:[]
    });
};

const addStudent =(req,res)=>{
    res.json({
        message:"Student Added Succesfully"
    });

};

module.exports={getStudents,addStudent};