const stripe = require("../config/Stripe");
const { checkOut } = require("./attendance.controller");

const createCheckoutSession = async (req,res)=>{
    try{
    const session = await stripe.checkout.sessions.create({
        mode:"payment",
        success_url:"http://localhost:5173/success",
        cancel_url:"http://localhost:5173/cancel",

        line_items:[
            {
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:"React Course"
                    },
                    unit_amount:5000
                },
                quantity:1
            }
        ]
        
    });

    res.json({url:session.url});

    } catch(error){
        console.error("Strip Checkout Error:",error.message);
        res.status(500).json({
            message:"Unable to create checkOut sesstion"
        })

    }

};

module.exports={createCheckoutSession}