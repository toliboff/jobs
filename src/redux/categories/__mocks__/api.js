const baseURL = 'https://financialmodelingprep.com/api/v3';
const apiKey = '7eac2e3f73d161944273338301184f8e';

export const fetchMarketData = async () => {
  console.log('Mock API');
  return Promise.resolve([
    {
      id: 1,
      ticker: 'GOOG',
      companyName: 'Google Inc.',
      marketCap: 987654321445,
      exchangeShortName: 'NASDAQ',
    },
    {
      id: 2,
      ticker: 'AAPL',
      companyName: 'Apple Inc.',
      marketCap: 823456789123,
      exchangeShortName: 'NASDAQ',
    },
    {
      id: 3,
      ticker: 'AMD',
      companyName: 'AMD Inc.',
      marketCap: 723456789123,
      exchangeShortName: 'TSX',
    },
    {
      id: 4,
      ticker: 'SNY',
      companyName: 'AMD Inc.',
      marketCap: 623456789123,
      exchangeShortName: 'AMEX',
    },
    {
      id: 5,
      ticker: 'SNY',
      companyName: 'AMD Inc.',
      marketCap: 523456789123,
      exchangeShortName: 'AMEX',
    },
  ]);
};

export const fetchCompanyData = async (payload) => {
  const fetchedData = await fetch(`${baseURL}/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&${payload}&apikey=${apiKey}`);
  const json = await fetchedData.json();
  return json;
};
