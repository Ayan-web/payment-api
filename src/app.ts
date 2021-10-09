import express from 'express'
import userRoutes from './routes/User';
import dotenv from 'dotenv'
import userPayment from './routes/Payment'
import {connect  } from 'mongoose'

//configs
dotenv.config()

const app = express();

//connect db 
connect(`${process.env.MONGO_URI}`,(err)=>{
	if(err)
		console.log(err.message)
	else
		console.log('connected to db')
})
// connection.once('open',()=>console.log('connected'))
	// .on('error',(err)=>console.warn(12))

//middlewares
app.use(express.json());


// routes 
app.use('/user',userRoutes);
app.use('/pay',userPayment);

export default app;
