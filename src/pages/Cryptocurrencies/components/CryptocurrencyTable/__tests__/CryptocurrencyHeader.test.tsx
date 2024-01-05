import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CryptocurrencyHeader } from '../CryptocurrencyHeader';

describe('#CryptocurrencyHeader', () => {
  it('should render cryptocurrency headers', () => {
    render(<CryptocurrencyHeader />);

    const headers = [
      '#',
      'Product',
      'Price',
      '1hr',
      '24hr',
      '7d',
      'Market Cap',
      'Circulating / Total Supply',
      'Last 7d',
    ];

    headers.forEach((header) => {
      const headerElement = screen.getByText(header);
      expect(headerElement).toBeInTheDocument();
    });
  });

  it('the rendered headers should have the same length as the array', () => {
    const { container } = render(<CryptocurrencyHeader />);

    const headers = [
      '#',
      'Product',
      'Price',
      '1hr',
      '24hr',
      '7d',
      'Market Cap',
      'Circulating / Total Supply',
      'Last 7d',
    ];

    const renderedHeaders = container.querySelectorAll(
      '.text-orange-400.font-bold'
    );
    expect(renderedHeaders).toHaveLength(headers.length);
  }),
    it('should render different headers dependent on the screen size', () => {
      render(<CryptocurrencyHeader />);

      const headers = {
        small: ['Product', 'Price'],
        medium: ['#', 'Product', 'Price', 'Market Cap'],
        large: [
          '#',
          'Product',
          'Price',
          '1hr',
          '24hr',
          '7d',
          'Market Cap',
          'Circulating / Total Supply',
          'Last 7d',
        ],
        xl: [
          '#',
          'Product',
          'Price',
          '1hr',
          '24hr',
          '7d',
          'Market Cap',
          'Circulating / Total Supply',
          'Last 7d',
        ],
      };

      headers.small.forEach((header) => {
        const headerElement = screen.getByText(header);
        expect(headerElement).toBeInTheDocument();
      });

      global.innerWidth = 768;
      window.dispatchEvent(new Event('resize'));

      headers.medium.forEach((header) => {
        const headerElement = screen.getByText(header);
        expect(headerElement).toBeInTheDocument();
      });

      global.innerWidth = 1024;
      window.dispatchEvent(new Event('resize'));

      headers.large.forEach((header) => {
        const headerElement = screen.getByText(header);
        expect(headerElement).toBeInTheDocument();
      });

      global.innerWidth = 1280;
      headers.xl.forEach((header) => {
        const headerElement = screen.getByText(header);
        expect(headerElement).toBeInTheDocument();
      });
    });
});
