import { combineReducers } from 'redux';
import users from './users';
import payments from './payments';

export default combineReducers({
	users,
	payments,
});
