import { FETCH_GAINERS, FETCH_COMPANY, FETCH_CHART } from '../actions/types';

const initialState = {
  gainersData: {
    gainers: [],
    isLoaded: false
  },
  companyData: {
    company: [],
    isLoaded: false
  },
  chartData: {
    chart: [],
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
    case FETCH_CHART:
      return {
        ...state,
        chartData: action.payload
      }
    default:
       return state;
      break;
  }
}