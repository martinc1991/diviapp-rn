import * as api from '../api/index.js';

// Action Creators
// The action creators use the functions imported from api/index.js (i.e. to make queries to the backend and so)

// Basic payment calculation
export const changeTheme = (dispatch) => {
	try {
		// console.log('theme actions');
		// console.log(peopleSpentData);
		// const payments = await api.calculatePayments(peopleSpentData);
		// console.log(payments.data);
		dispatch({ type: 'CHANGE_THEME', payload: '' });
	} catch (error) {
		console.log(error.message);
	}
};
