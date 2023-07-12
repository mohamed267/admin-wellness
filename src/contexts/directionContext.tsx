import { useContext, createContext } from 'react';

export const DirectionContext = createContext<{
  dir: string;
}>({
  dir: 'ltr',
});

export const useDirectionContext = () => useContext(DirectionContext);
