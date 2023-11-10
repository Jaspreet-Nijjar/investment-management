import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '../SearchBar';
import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('#SearchBar', () => {
  it('renders the search bar component with the placeholder text', () => {
    render(
      <Provider store={store}>
        <SearchBar placeholder="Search" />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  }),
    it('update the search value when the user enters text in the field', () => {
      render(
        <Provider store={store}>
          <SearchBar placeholder="Search" />
        </Provider>
      );

      const inputElement = screen.getByPlaceholderText(
        /search/i
      ) as HTMLInputElement;

      userEvent.type(inputElement, 'test value');

      userEvent.type(inputElement, '{ enter }');

      expect(inputElement.value).toBe('test value');
    });
});
