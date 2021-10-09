import { Router } from "express";
import Auth from "../middleware/auth"

const router = Router();

router.post("/",Auth,(req,res)=>{
	res.send('sucess');
})

export default router;
