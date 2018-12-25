import {combineReducers} from 'redux';
import gainersReducer from './gainersReducer';

export default combineReducers({
  gainers: gainersReducer
});
