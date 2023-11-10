import { useSelector, useDispatch } from 'react-redux';
import { searchQuery, submitSearch } from './searchBarSlice';

interface SearchBarProps {
  placeholder: string;
}

type RootState = {
  searchBar: {
    value: string;
  };
};

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  const searchBar = useSelector((state: RootState) => state.searchBar);
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchQuery(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitSearch());
  };

  return (
    <form className="ml-60" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchBar.value}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="mx-auto focus:outline-none p-2 border border-gray-300 rounded w-30 mt-2 md:w-72 lg:w-96"
      />
    </form>
  );
};
