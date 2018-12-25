import { FETCH_GAINERS } from './types.js';

export const fetchGainers = () => dispath => {
  fetch("https://api.iextrading.com/1.0/stock/market/list/gainers")
    .then(gainers => gainers.json())
    .then(gainers => {
      dispath({
        type: FETCH_GAINERS,
        payload: {
          gainers: gainers,
          isLoaded: true
        }
      })
    });
}