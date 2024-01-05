import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarketCapCard from '../MarketCapCard';
import * as numeral from 'numeral';

jest.mock('../../../services/cryptoAPI', () => ({
  useGetCoinSummaryDataQuery: jest.fn(() => ({
    data: {
      data: {
        total_market_cap: {
          usd: 246353,
        },
      },
    },
    isLoading: false,
    isError: false,
  })),
}));

jest.mock('../../../utilities/formatNumber', () => ({
  formatNumber: jest.fn((value) => numeral(value).format('0,0')),
}));

describe('#MarketCardCard', () => {
  it('should render the total market cap data', async () => {
    render(<MarketCapCard />);

    await waitFor(() => {
      expect(screen.getByText('$246,353')).toBeInTheDocument();
      expect(screen.getByText('Market Capitalisation')).toBeInTheDocument();
    });
  });
});
