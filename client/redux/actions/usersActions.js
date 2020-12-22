import * as api from '../api/index.js';

// Action Creators
// The action creators use the functions imported from api/index.js (i.e. to make queries to the backend and so)

// Get Users from DB
export const getUsers = () => async (dispatch) => {
	try {
		const { data } = await api.fetchUsers();
		// console.log(data);
		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createUser = (user) => async (dispatch) => {
	try {
		const { data } = await api.createUser(user);
		// console.log(data);
		dispatch({ type: 'CREATE', payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
