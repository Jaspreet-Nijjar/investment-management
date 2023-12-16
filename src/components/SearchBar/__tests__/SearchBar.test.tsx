import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';
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
    it('update the search value when the user enters text in the field', async () => {
      render(
        <Provider store={store}>
          <SearchBar placeholder="Search" />
        </Provider>
      );

      const inputElement = screen.getByPlaceholderText(
        /search/i
      ) as HTMLInputElement;

      userEvent.type(inputElement, 'test value');

      await waitFor(() => {
        expect(inputElement.value).toBe('test value');
      });
    });
});
