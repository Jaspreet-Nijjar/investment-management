import { render, screen, waitFor } from '@testing-library/react';
import * as cryptoAPI from '../../../services/cryptoAPI';
import '@testing-library/jest-dom';
import { CoinSummaryData } from '../CoinSummaryData';

jest.mock('../../../services/cryptoAPI', () => ({
  ...jest.requireActual('../../../services/cryptoAPI'),
  useGetCoinSummaryDataQuery: jest.fn(),
}));

const mockData = {
  data: {
    active_cryptocurrencies: 5000,
    markets: 200,
  },
  error: null,
  isLoading: false,
};

(cryptoAPI.useGetCoinSummaryDataQuery as jest.Mock).mockReturnValue({
  data: {
    data: mockData.data,
  },
  error: mockData.error,
  isLoading: mockData.isLoading,
});

describe('#CoinSummaryData', () => {
  it('should render the fetched data for the coin summary component', async () => {
    render(<CoinSummaryData />);

    screen.debug();

    await waitFor(() => {
      expect(
        screen.getByText(`Coins: ${mockData.data.active_cryptocurrencies}`)
      ).toBeInTheDocument();

      expect(
        screen.getByText(`Exchanges: ${mockData.data.markets}`)
      ).toBeInTheDocument();
    });
  });
});
