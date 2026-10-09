
const Stripe = require("stripe");

if(!process.env.STRIPE_SECRET_KEY){
    throw new Error ("Stripe Secret Key is missing");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports=stripe;