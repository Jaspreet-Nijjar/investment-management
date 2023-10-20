import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from '../Footer';

describe('#Footer', () => {
  it('should display the footer component', () => {
    render(<Footer />);

    const footerComponent = screen.getByText('Created By Jaspreet Nijjar');

    expect(footerComponent).toBeInTheDocument();
  });
});
