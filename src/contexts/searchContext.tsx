import { useContext, createContext } from 'react';
import { defaultFn } from 'utils/functions';

export const SearchContext = createContext<{
  search: string;
  setSearch?: any;
}>({
  search: '',
  setSearch: defaultFn,
});

export const useSearchContext = () => useContext(SearchContext);
