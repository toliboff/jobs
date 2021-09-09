const FETCH_ALL_MARKETS = 'JOBS/FETCH_ALL_MARKETS';
const initialState = { markets: [], companies: [] };

export const fetchAllMarkets = () => async (dispatch) => {
  const fetchedData = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&apikey=6c2d08df2b4645477a2cfe6926f2b36f');
  const json = await fetchedData.json();
  const market = {
    markets: Array.from(new Set(json.map((market) => market.exchangeShortName))),
    list: json,
    totalCap: json.map((cap) => cap.marketCap).reduce((a, b) => a + b),
  };

  dispatch({
    type: FETCH_ALL_MARKETS,
    payload: market,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MARKETS: return action.payload;
    default: return state;
  }
};

export default reducer;
