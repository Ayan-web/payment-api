import { Router,Request,Response } from "express";
import Auth from "../middleware/auth"
import dotenv from 'dotenv'
import razorpay from 'razorpay'


//dotenv 
dotenv.config()

const router = Router();

const instance = new razorpay({
  key_id:process.env.KEY_ID,
  key_secret:process.env.KEY_SECRET,
});


router.post("/",Auth,(req:Request,res:Response)=>{
	const {amount, currency} = req.body
	const options = {
		amount: 50000,  // amount in the smallest currency unit
		currency: "INR",
		receipt: "order_rcptid_11"
	};
	instance.orders.create(options, function(err, order) {
		console.log(order);
	});
})

export default router;
