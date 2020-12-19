import mongoose from 'mongoose';
const { Schema } = mongoose;

const friendSchema = new Schema(
	{
		// El unico dato requerido es el de alias (para poder identificar a la persona)
		alias: { type: String, required: true },
		// La informacion de 'name' y 'lastname' es mejor ponerla, pero no es necesaria
		name: String,
		lastaname: String,
		email: String,
		phone: Number,
		cbu: Number,
	},
	{ timestamps: true } // Adds 'createdAt' and 'updatedAt' fields
);

// To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
const Friend = mongoose.model('Friend', friendSchema);

export default Friend;
