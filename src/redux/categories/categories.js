const FETCH_ALL_MARKETS = 'JOBS/FETCH_ALL_MARKETS';
const initialState = { markets: [], companies: [] };

const getMarkets = (arr) => {
  const markets = Array.from(new Set(arr.map((market) => market.exchangeShortName)));
  return markets.map((m) => ({
    name: m,
    marketCap: arr.filter((ex) => ex.exchangeShortName === m)
      .map((cap) => cap.marketCap)
      .reduce((a, b) => a + b),
  }));
};

const calculateTotal = (arr) => arr.map((cap) => cap.marketCap).reduce((a, b) => a + b);

export const fetchAllMarkets = () => async (dispatch) => {
  const fetchedData = await fetch('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&apikey=6c2d08df2b4645477a2cfe6926f2b36f');
  const json = await fetchedData.json();
  const market = {
    markets: getMarkets(json),
    totalCap: calculateTotal(json),
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
