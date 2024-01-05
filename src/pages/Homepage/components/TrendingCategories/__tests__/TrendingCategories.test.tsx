import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import TrendingCategories from '../TrendingCategories';

const server = setupServer(
  rest.get('/search/trending', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Liquid Staking Governance Tokens' },
        { name: 'Real World Assets (RWA)' },
        { name: 'Launchpad' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('#TrendingCategories', () => {
  it('should render the names of the first three trending categories', async () => {
    render(
      <Provider store={store}>
        <TrendingCategories />
      </Provider>
    );

    await waitFor(() => {
      expect(
        screen.getByText('Liquid Staking Governance Tokens')
      ).toBeInTheDocument();
      expect(screen.getByText('Real World Assets (RWA)')).toBeInTheDocument();
      expect(screen.getByText('Launchpad')).toBeInTheDocument();
    });
  });
});
