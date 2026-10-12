 require("dotenv").config();

 console.log("EMAIL_USER exists:", Boolean(process.env.EMAIL_USER));
console.log("EMAIL_PASS exists:", Boolean(process.env.EMAIL_PASS));

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
});

console.log("nodemailer transport configured");

async function verifyEmailConnection(){
    try{

        await transporter.verify();

        console.log("verification sucessfull")
    } catch(error){
        console.error("verification Failed",error.message);

    }

}
 verifyEmailConnection();
    
