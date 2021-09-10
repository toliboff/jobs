import { fetchMarketData, fetchCompanyData } from '../api';
import { calculateTotal } from '../categories/categories';

jest.mock('../api');

describe('Testing redux functions', () => {
  test('should calculate the market capitalisation in billion', () => {
    const marketInfo = [
      {
        id: 1,
        ticker: 'AAPL',
        marketCap: 123456789123,
      },
      {
        id: 2,
        ticker: 'GOOG',
        marketCap: 987654321445,
      },
    ];

    expect(calculateTotal(marketInfo)).toBe('1111.11');
  });

  test('should fetch data for the whole stock market', async () => {
    const stock = [
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
    const marketCapitalisation = await fetchMarketData();
    expect(marketCapitalisation).toEqual(stock);
  });

  test('should fetch data from AMEX stock market', async () => {
    const stock = [
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
    const filterBy = 'AMEX';
    const companyCapitalisation = await fetchCompanyData(filterBy);
    expect(companyCapitalisation).toEqual(stock);
  });
});
