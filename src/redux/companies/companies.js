const FETCH_COMPANIES = 'JOBS/FETCH_COMPANIES';
const initialState = { companies: [], totalCap: [] };

const intoBillion = (amount) => (amount / 1000000000).toFixed(2);

const getCompanies = (arr, exchange) => arr.filter((ex) => ex.exchangeShortName === exchange)
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
  const fetchedData = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&apikey=7eac2e3f73d161944273338301184f8e');
  const json = await fetchedData.json();
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
