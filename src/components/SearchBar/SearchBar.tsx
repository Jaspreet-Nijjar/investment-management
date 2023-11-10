import { useSelector, useDispatch } from 'react-redux';
import { searchQuery } from './searchBarSlice';

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  const searchBar = useSelector((state: RootState) => state.searchBar);
  const dispatch = useDispatch();

  type RootState = {
    searchBar: string;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchQuery(e.target.value));
  };

  return (
    <section className="ml-20 flex rounded items-center">
      <input
        type="text"
        value={searchBar}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="mx-auto focus:outline-none p-2 border border-gray-300 rounded w-30 mt-2 md:w-72 lg:w-96"
      />
    </section>
  );
};
