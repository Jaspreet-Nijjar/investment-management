import { useSelector, useDispatch } from 'react-redux';
import { searchQuery } from './searchBarSlice';

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const searchBar = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(searchQuery(e.target.value));
  }

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
}
