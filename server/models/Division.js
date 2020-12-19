import mongoose from 'mongoose';
const { Schema } = mongoose;

const divisionSchema = new Schema(
	{
		title: String,
		description: String,
		owner: String,
		participants: [String], // ver bien estos campos
		group: [String], // ver bien estos campos
		result: [String], // ver bien estos campos
	},
	{ timestamps: true } // Adds 'createdAt' and 'updatedAt' fields
);

// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const Division = mongoose.model('Division', divisionSchema);

export default Division;
