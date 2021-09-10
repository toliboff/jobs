const baseURL = 'https://financialmodelingprep.com/api/v3';
const apiKey = '7eac2e3f73d161944273338301184f8e';

export const fetchMarketData = async () => {
  const fetchedData = await fetch(`${baseURL}/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&apikey=${apiKey}`);
  const json = await fetchedData.json();
  return json;
};

export const fetchCompanyData = async (payload) => {
  const fetchedData = await fetch(`${baseURL}/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&${payload}&apikey=${apiKey}`);
  const json = await fetchedData.json();
  return json;
};
