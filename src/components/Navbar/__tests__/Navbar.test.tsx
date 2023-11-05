import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Navbar } from '../Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('#Navbar', () => {
  it('should navigate to the correct page when the user clicks on the page', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = screen.getByText('Home');
    const portfolioLink = screen.getByText('Portfolio');
    const stocksLink = screen.getByText('Stocks');
    const cryptocurrenciesLink = screen.getByText('Cryptocurrencies');
    const newsLink = screen.getByText('News');

    userEvent.click(portfolioLink);
    userEvent.click(homeLink);
    userEvent.click(stocksLink);
    userEvent.click(cryptocurrenciesLink);
    userEvent.click(newsLink);

    const portfolioPageContent = screen.getByText('Portfolio');
    const homePageContent = screen.getByText('Home');
    const stocksPageContent = screen.getByText('Stocks');
    const cryptocurrenciesPageContent = screen.getByText('Cryptocurrencies');
    const newsPageContent = screen.getByText('News');

    expect(portfolioPageContent).toBeInTheDocument();
    expect(homePageContent).toBeInTheDocument();
    expect(stocksPageContent).toBeInTheDocument();
    expect(cryptocurrenciesPageContent).toBeInTheDocument();
    expect(newsPageContent).toBeInTheDocument();
  });
});
