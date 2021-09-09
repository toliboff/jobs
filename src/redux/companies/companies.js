const FETCH_COMPANIES = 'JOBS/FETCH_COMPANIES';
const initialState = { companies: [], totalCap: [] };

const intoBillion = (amount) => (amount / 1000000000).toFixed(2);

const getCompanies = (arr) => arr.map((m) => ({
  name: m.companyName,
  marketCap: intoBillion(m.marketCap),
}));

const calculateTotal = (arr) => intoBillion(arr.map((cap) => cap.marketCap)
  .reduce((a, b) => a + b));

export const fetchCompanies = (payload) => async (dispatch) => {
  const fetchedData = await fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&exchange=${payload}&apikey=6c2d08df2b4645477a2cfe6926f2b36f`);
  const json = await fetchedData.json();
  const companies = {
    companies: getCompanies(json),
    totalCap: calculateTotal(json),
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
