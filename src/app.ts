import express from 'express'
import userRoutes from './routes/User';
import userPayment from './routes/Payment'


const app = express();

app.use('/user',userRoutes);
app.use('/pay',userPayment);

export default app;
