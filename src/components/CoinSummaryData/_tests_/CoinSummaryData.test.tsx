import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CoinSummaryData } from '../CoinSummaryData';
import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('#CoinSummaryData', () => {
  it('should render the CoinSummaryData component', async () => {
    const { getByText } = render(
      <Provider store={store}>
        (<CoinSummaryData />
        );
      </Provider>
    );

    await waitFor(() => {
      expect(getByText('Coins:')).toBeInTheDocument();
      expect(getByText('Exchanges:')).toBeInTheDocument();
      expect(getByText('Dominance: BTC %')).toBeInTheDocument();
      expect(getByText('ETH %')).toBeInTheDocument();
    });
  });
});
