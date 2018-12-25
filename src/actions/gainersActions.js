import { FETCH_GAINERS, FETCH_COMPANY } from './types.js';

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

export const fetchCompany = (symbol) => dispath => {
  fetch(`https://api.iextrading.com/1.0/stock${symbol}/company`)
  .then(company => company.json())
  .then(company => {
    dispath({
      type: FETCH_COMPANY,
      payload: {
        company: company,
        isLoaded: true
      }
    })
  });
}

