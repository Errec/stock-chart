import { FETCH_GAINERS } from '../actions/types';

const initialState = {
  gainersData: {
    gainers: [],
    isLoaded: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GAINERS:
      return {
        ...state,
        gainersData: action.payload
      }
    default:
       return state;
      break;
  }
}