import { FETCH_ACTIVITY } from '../actions/types';

export default function(state = {}, action) {
  
  switch (action.type) {
    case FETCH_ACTIVITY:
      state = action.payload;
      console.log(action.payload);
      console.log(state);
    default:
      return state;  
  }
}