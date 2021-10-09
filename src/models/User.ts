import {model, Schema} from 'mongoose';

//this is just minimal you can add more if you like 

interface User{
	name: string;
	email: string;
	password: string;
}

const userSchema = new Schema< User >({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password:{type :String, required:true},
})

const userModel = model< User >('User',userSchema);

export default userModel;

