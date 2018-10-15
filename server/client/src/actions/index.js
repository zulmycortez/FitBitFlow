import axios from 'axios';
import { FETCH_USER, FETCH_SLEEP, FETCH_HEARTRATE, FETCH_ACTIVITY } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('http://localhost:3000/authorize/profile');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSleep = () => async dispatch => {
  let res = await axios.get('http://localhost:3000/authorize/sleep');
  const sleepArray = res.data.sleep.map(minutes => {
    return minutes.timeInBed;
});
  dispatch ({ type: FETCH_SLEEP, payload: sleepArray});
};

export const fetchHeartRate = () => async dispatch => {
  let res = await axios.get('http://localhost:3000/authorize/heartrate');
  const heartRateArray = res.data["activities-heart"].map(restingHR => {
    return restingHR.value.restingHeartRate;
  });
  dispatch({ type: FETCH_HEARTRATE, payload: heartRateArray });
};

export const fetchActivity = () => async dispatch => {
  let res = await axios.get('http://localhost:3000/authorize/activity');
  const activityArray = res.data["activities-calories"].map(caloriesOut => {
    return parseInt(caloriesOut.value);
  });
  dispatch({ type: FETCH_ACTIVITY, payload: activityArray });

};

export const fetchSteps = () => async dispatch => {
  let res = await axios.get('http://localhost:3000/authorize/activity/steps');
  const stepsArray = res.data["activities-steps"].map(caloriesOut => {
    return parseInt(caloriesOut.value);
  });
  dispatch({ type: FETCH_ACTIVITY, payload: stepsArray });
  
};