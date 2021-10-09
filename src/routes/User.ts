import {Router} from 'express';
import userModel from '../models/User'
import {compare, hash}  from 'bcrypt'
import {sign} from 'jsonwebtoken'

const router = Router();

router.post("/login",async( req, res)=>{
	const {password,email} = req.body;
	if (!(email && password)) {
		return res.status(400).send("All input is required");
	}
	const user = await userModel.findOne({ email });
	if(user &&(await compare(password,user.password)))
	{
		const token = sign(
			{ user_id: user._id, email },
			process.env.TOKEN_KEY,
			{
				expiresIn: "2h",
			}
		);

		// save user token
		// user.token = token;

		// user
		return res.status(200).json(token);
	}
	return res.status(400).send('Invalid Credentials');

})

router.post("/register",async(req,res)=>{
	const {name, password,email} = req.body;

	if (!(email && password && name)) {
		return res.status(404).send("All input is required");
	}

	const oldUser = await userModel.findOne({ email });

	if (oldUser) {
		return res.status(404).send("User Already Exist. Please Login")
	}

	const hashedpassword = await hash(password,10)


	const user = new userModel({
		name:name,
		email:email,
		password:hashedpassword
	})

	const token = sign(
		{ user_id: user._id, email },
		process.env.TOKEN_KEY,
		{
			expiresIn: "2h",
		}
	)
	try{
		 await user.save();
		 res.status(201).json(token);
	}
	catch(err){
		return res.status(400).send(err);
	}

})

export default router;
