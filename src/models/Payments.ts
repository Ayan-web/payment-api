import {model, Schema} from 'mongoose';

interface Payments{
	payment_id: string;
	order_id: string;
	signature: string;
	os_type:string;
	client_ip :string;
}

const paymentsSchema = new Schema< Payments> ({
	payment_id:{type:String,required:true},
	order_id:{type:String,required:true},
	signature:{type:String,require:true},
	os_type:{type:String,required:true},
	client_ip:{type:String,required:true}
})

const paymentsModel = model< Payments >('Payments',paymentsSchema);

export default paymentsModel

