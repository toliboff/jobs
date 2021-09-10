import { fetchCompanyData } from '../api';

const FETCH_COMPANIES = 'JOBS/FETCH_COMPANIES';
const initialState = { companies: [], totalCap: [] };

const intoBillion = (amount) => (amount / 1000000000).toFixed(2);

const getCompanies = (arr) => arr
  .map((m) => ({
    name: m.companyName,
    symbol: m.symbol,
    marketCap: intoBillion(m.marketCap),
  }));

const calculateTotal = (arr, exchange) => intoBillion(arr
  .filter((ex) => ex.exchangeShortName === exchange)
  .map((cap) => cap.marketCap)
  .reduce((a, b) => a + b));

export const fetchCompanies = (payload) => async (dispatch) => {
  const json = await fetchCompanyData(payload);
  const companies = {
    companies: getCompanies(json, payload),
    totalCap: calculateTotal(json, payload),
    filter: payload,
  };

  dispatch({
    type: FETCH_COMPANIES,
    payload: companies,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES: return action.payload;
    default: return state;
  }
};

export default reducer;
