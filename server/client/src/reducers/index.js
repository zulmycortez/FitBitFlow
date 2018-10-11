import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sleepReducer from './sleepReducer';
import heartRateReducer from './heartRateReducer';
import activityReducer from './activityReducer';

export default combineReducers({
  auth: authReducer,
  sleep: sleepReducer,
  heartRate: heartRateReducer,
  activity: activityReducer
});