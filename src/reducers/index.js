import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import partyReducer from './partyReducer/partyReducer';

export default combineReducers({
  auth: authReducer,
  party: partyReducer
});
