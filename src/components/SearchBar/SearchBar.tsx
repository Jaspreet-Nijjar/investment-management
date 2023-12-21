import { useSelector, useDispatch } from 'react-redux';
import { searchQuery } from './searchBarSlice';
import { RootState } from '../../store/store';

interface SearchBarProps {
  placeholder: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  const searchBar = useSelector((state: RootState) => state.searchBar);
  const dispatch = useDispatch();

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(searchQuery(e.target.value));
  }

  return (
    <section className="flex rounded items-center ml-24">
      <input
        type="text"
        value={searchBar}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="mx-auto focus:outline-orange-300 border border-gray-300 rounded w-30 mt-2 md:w-72"
      />
    </section>
  );
}
