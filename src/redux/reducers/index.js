import { combineReducers } from 'redux';
import fontSize from './fontSize';
import payments from './payments';
import theme from './theme';
import users from './users';

export default combineReducers({
  users,
  payments,
  theme,
  fontSize,
});
