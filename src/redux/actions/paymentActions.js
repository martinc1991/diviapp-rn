import { calculate_basicPayment } from '../../utils/payments';

// Action Creators
// The action creators use the functions imported from api/index.js (i.e. to make queries to the backend and so)

// Basic payment calculation
export const getPayments = (peopleSpentData) => {
  return (dispatch) => {
    try {
      const payments = calculate_basicPayment(peopleSpentData);
      dispatch({ type: 'CALCULATE_PAYMENT', payload: payments });
    } catch (error) {
      console.log('ERROR:', error.message);
    }
  };
};
// Reset current payment
export const resetCurrentPayment = () => {
  return (dispatch) => {
    try {
      dispatch({ type: 'RESET_PAYMENT' });
    } catch (error) {
      console.log(error.message);
    }
  };
};
