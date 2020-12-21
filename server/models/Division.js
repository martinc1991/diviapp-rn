import mongoose from 'mongoose';
const { Schema } = mongoose;

const paymentSchema = new Schema(
	{
		title: { type: String, default: '' },
		description: { type: String, default: '' },
		owner: { type: String, default: '' },
		participants: { type: [String], required: true }, // ver bien estos campos
		isGroup: { type: Boolean, default: false }, // ver bien estos campos
		groupName: { type: String, default: '' }, // ver bien estos campos
		result: { type: Object, required: true }, // ver bien estos campos
	},
	{ timestamps: true } // Adds 'createdAt' and 'updatedAt' fields
);

// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
