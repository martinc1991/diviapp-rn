import * as api from '../api/index.js';

// Action Creators
// The action creators use the functions imported from api/index.js (i.e. to make queries to the backend and so)

// Basic payment calculation
export const getPayments = (peopleSpentData) => async (dispatch) => {
	try {
		// console.log('payments actions');
		// console.log(peopleSpentData);
		const payments = await api.calculatePayments(peopleSpentData);
		// console.log(payments.data);
		dispatch({ type: 'CALCULATE_PAYMENT', payload: payments.data });
	} catch (error) {
		console.log(error.message);
	}
};
// Reset current payment
export const resetCurrentPayment = () => async (dispatch) => {
	try {
		// console.log('payments actions');
		// console.log(peopleSpentData);
		// const payments = await api.calculatePayments(peopleSpentData);
		// console.log(payments.data);
		dispatch({ type: 'RESET_PAYMENT' });
	} catch (error) {
		console.log(error.message);
	}
};
