import {Router} from 'express';

const router = Router();

router.post("/login",async( req, res)=>{
	res.send('logined');
})

router.post("/register",async(req,res)=>{
	res.send('register');
})

export default router;
