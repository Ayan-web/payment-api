import {model, Schema} from 'mongoose';

interface User{
	name: string;
	email: string;
}

const userSchema = new Schema< User >({
	name: { type: String, required: true },
	email: { type: String, required: true },
})

const userModel = model< User >('User',userSchema);

export default userModel;

