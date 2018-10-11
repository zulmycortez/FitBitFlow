import axios from 'axios';
import { FETCH_USER, FETCH_SLEEP, FETCH_HEARTRATE, FETCH_ACTIVITY } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('http://localhost:3000/authorize/profile');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSleep = () => async dispatch => {
  const res = await axios.get('http://localhost:3000/authorize/sleep');

  dispatch ({ type: FETCH_SLEEP, payload: res.data});
  const sleepArray = res.data.sleep.map(minutes => {
    return minutes.timeInBed;
});
  console.log(sleepArray);
};

export const fetchHeartRate = () => async dispatch => {
  const res = await axios.get('http://localhost:3000/authorize/heartrate');

  dispatch({ type: FETCH_HEARTRATE, payload: res.data });
  console.log(res.data);

  const heartRateArray = res.data["activities-heart"].map(restingHR => {
    return restingHR.restingHeartRate;
  });
  console.log(heartRateArray);
};

export const fetchActivity = () => async dispatch => {
  const res = await axios.get('http://localhost:3000/authorize/activity');

  dispatch({ type: FETCH_ACTIVITY, payload: res.data });
  console.log(res.data);

  const activityArray = res.data["activities-calories"].map(caloriesOut => {
    return caloriesOut.value;
  });
  console.log(activityArray);
};