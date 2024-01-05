import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import TrendingCoinRow from '../TrendingCoinRow';

const server = setupServer(
  rest.get('/search/trending', (_req, res, ctx) => {
    const trendingCoins = [
      { id: 1, name: 'Bitcoin', thumb: 'bitcoin.png', current_price: 5000 },
      { id: 2, name: 'Ethereum', thumb: 'ethereum.png', current_price: 3000 },
    ];
    return res(ctx.status(200), ctx.json(trendingCoins));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('#TrendingCoinRow', () => {
  it('should render coin details', async () => {
    render(
      <Provider store={store}>
        <TrendingCoinRow
          coin={{
            id: 1,
            name: 'Bitcoin',
            thumb: 'bitcoin.png',
            current_price: 50000,
          }}
        />
      </Provider>
    );

    await waitFor(async () => {
      const bitcoinElement = screen.getByText(/Bitcoin/i);
      expect(bitcoinElement).toBeInTheDocument();
    });
  });
});
