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

export const fetchCompanyData = async (market) => {
  console.log('Mock API');
  const wholeMarket = [
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
  ];

  const filtered = wholeMarket.filter((stock) => stock.exchangeShortName === market);
  return Promise.resolve(filtered);
};
