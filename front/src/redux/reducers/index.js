import { combineReducers } from 'redux';
import cuisinesReducer from './cuisines-reducer';

export default combineReducers({
  cuisines: cuisinesReducer,
});