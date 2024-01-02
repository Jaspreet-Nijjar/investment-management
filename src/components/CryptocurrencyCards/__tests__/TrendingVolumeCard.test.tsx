import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrendingVolumeCard from '../TrendingVolumeCard';
// import numeral from 'numeral';
import * as numeral from 'numeral';

jest.mock('../../../services/cryptoAPI', () => ({
  useGetCoinSummaryDataQuery: jest.fn(() => ({
    data: {
      data: {
        total_volume: {
          usd: 123456789,
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

describe('#TrendingVolumeCard', () => {
  it('renders the volume data when it is available', async () => {
    render(<TrendingVolumeCard />);

    await waitFor(() => {
      expect(screen.getByText('$123,456,789')).toBeInTheDocument();
      expect(screen.getByText('24hr Trading Volume')).toBeInTheDocument();
    });
  });
});
