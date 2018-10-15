import { FETCH_HEARTRATE } from '../actions/types';

export default function(state = [], action) {
  
  switch (action.type) {
    case FETCH_HEARTRATE:
      state = action.payload;
    default:
      return state;  
  }
}