import { combineReducers } from 'redux';
import users from './users';
import payments from './payments';
import theme from './theme';

export default combineReducers({
	users,
	payments,
	theme,
});
