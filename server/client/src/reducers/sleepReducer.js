import { FETCH_SLEEP } from '../actions/types';

export default function(state = {}, action) {
  
  switch (action.type) {
    case FETCH_SLEEP:
      state = action.payload;
      console.log(action.payload);
      console.log(state);
    default:
      return state;  
  }
}