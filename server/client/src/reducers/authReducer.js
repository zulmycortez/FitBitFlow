import { FETCH_USER, FETCH_LOGOUT } from '../actions/types';

export default function(state = {}, action) {
  
  switch (action.type) {
    case FETCH_USER:
      state = action.payload;
    default:
      return state;  
    case FETCH_LOGOUT:
      state = action.payload;

  }
}