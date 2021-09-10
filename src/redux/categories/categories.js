import { fetchMarketData } from '../api';

const FETCH_ALL_MARKETS = 'JOBS/FETCH_ALL_MARKETS';
const initialState = { markets: [], companies: [] };

const intoBillion = (amount) => (amount / 1000000000).toFixed(2);

export const getMarkets = (arr) => {
  const markets = Array.from(new Set(arr.map((market) => market.exchangeShortName)));
  return markets.map((m) => ({
    name: m,
    marketCap: intoBillion(arr.filter((ex) => ex.exchangeShortName === m)
      .map((cap) => cap.marketCap)
      .reduce((a, b) => a + b)),
  }));
};

export const calculateTotal = (arr) => intoBillion(arr.map((cap) => cap.marketCap)
  .reduce((a, b) => a + b));

export const fetchAllMarkets = () => async (dispatch) => {
  const json = await fetchMarketData();
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
