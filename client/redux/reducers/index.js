import { combineReducers } from 'redux';
import users from './users';
import payments from './payments';
import theme from './theme';
import fontSize from './fontSize';

export default combineReducers({
	users,
	payments,
	theme,
	fontSize,
});
