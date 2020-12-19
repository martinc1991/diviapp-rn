import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
	{
		// Los unicos campos requeridos son email, username, y password
		email: { type: String, required: true },
		username: { type: String, required: true },
		password: { type: String, required: true },
		// Los siguientes campos son opcionales a la hora del registro
		name: String,
		lastaname: String,
		phone: Number,
		dob: Date,
		cbu: Number,
		friends: [String], // ver bien esto
		groups: [String], // ver bien esto
	},
	{ timestamps: true } // Adds 'createdAt' and 'updatedAt' fields
);

// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const User = mongoose.model('User', userSchema);

export default User;
