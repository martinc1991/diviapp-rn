import User from '../models/User.js';

// GET all users
export const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		// Send response
		res.status(200).json(users);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createUser = async (req, res) => {
	const user = req.body;
	console.log(req.body);
	const newUser = new User(user);
	try {
		await newUser.save();
		// Send response
		res.status(200).json(newUser);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
