import { FETCH_USER } from '../actions/types';

export default function(state = {}, action) {
  
  switch (action.type) {
    case FETCH_USER:
      state = action.payload;
    default:
      return state;  
  }
}