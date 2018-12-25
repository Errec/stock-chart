import { FETCH_GAINERS, FETCH_COMPANY } from '../actions/types';

const initialState = {
  gainersData: {
    gainers: [],
    isLoaded: false
  },
  companyData: {
    company: [],
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
    case FETCH_COMPANY:
      return {
        ...state,
        companyData: action.payload
      }
    default:
       return state;
      break;
  }
}