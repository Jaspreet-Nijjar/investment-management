import { useSelector, useDispatch } from 'react-redux';
import { searchQuery } from './searchBarSlice';

const SearchBar = () => {
  const searchBar = useSelector((state: RootState) => state.searchBar);
  const dispatch = useDispatch();

  type RootState = {
    searchBar: string;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchQuery(e.target.value));
  };

  return <input type="text" value={searchBar} onChange={handleSearchChange} />;
};

export default SearchBar;
