import { useEffect, useState } from 'react';

function useDeboundSearch(value: string, delay: number) {
  // Hooks ===========================================================================
  const [searchValue, setSearchValue] = useState<string>(value);
  useEffect(() => {
    const searchHandler = setTimeout(() => {
      setSearchValue(value);
    }, delay);

    return () => {
      clearTimeout(searchHandler);
    };
  }, [value, delay]);

  return searchValue;
}

export default useDeboundSearch;
