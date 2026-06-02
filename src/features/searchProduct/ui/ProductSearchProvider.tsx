import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { LoadedFilters, SearchState } from '../model/types';
import { useSearchParams } from 'react-router-dom';
import { ProductSearchContext } from '../model/ProductSearchContext';
import { createNextSearchParams } from '../model/createNextSearchParams';
import { parseSearchStateFromUrl } from '../model/parseSearchStateFromUrl';
import { normalizeSearchState } from '../model/normalizeSearchState';

type ProductSearchProviderProps = {
  loadedFilters?: LoadedFilters;
  children: ReactNode;
};

export const ProductSearchProvider = ({ children, loadedFilters }: ProductSearchProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsString = searchParams.toString();

  const committedSearchState = useMemo(
    () => parseSearchStateFromUrl(searchParamsString, loadedFilters),
    [searchParamsString, loadedFilters]
  );

  const [stagedSearchState, setStagedSearchState] = useState<SearchState>(committedSearchState);

  useEffect(() => {
    setStagedSearchState(committedSearchState);
  }, [committedSearchState]);

  const commitSearchState = useCallback(
    (nextSearchState: SearchState) => {
      const normalized = normalizeSearchState(nextSearchState, loadedFilters);
      const nextSearchParams = createNextSearchParams(
        searchParamsString,
        { ...normalized, page: 1 },
        loadedFilters
      );

      setSearchParams(nextSearchParams);
    },
    [searchParamsString, setSearchParams, loadedFilters]
  );

  const commitStagedSearchState = useCallback(() => {
    commitSearchState(stagedSearchState);
  }, [commitSearchState, stagedSearchState]);

  const resetSearchState = useCallback(() => {
    commitSearchState({
      ...committedSearchState,
      query: '',
      filters: {},
    });
  }, [commitSearchState, committedSearchState]);

  const isSearchStateChanged = useMemo(() => {
    return JSON.stringify(committedSearchState) !== JSON.stringify(stagedSearchState);
  }, [committedSearchState, stagedSearchState]);

  const handleCheckboxFilterChange = useCallback(
    (name: string, value: string, autoCommit = true) => {
      const checkboxState = stagedSearchState.filters[name];

      if (checkboxState?.type !== 'checkbox') return;

      const nextValues = checkboxState.values.includes(value)
        ? checkboxState.values.filter(v => v !== value)
        : [...checkboxState.values, value];

      const nextSearchState = {
        ...stagedSearchState,
        filters: {
          ...stagedSearchState.filters,
          [name]: { ...checkboxState, values: nextValues },
        },
      };

      if (autoCommit) {
        commitSearchState(nextSearchState);
      } else {
        setStagedSearchState(nextSearchState);
      }
    },
    [commitSearchState, stagedSearchState]
  );

  const handleRangeFilterChange = useCallback(
    (name: string, values: { currentMin: number; currentMax: number }, autoCommit = true) => {
      const rangeState = stagedSearchState.filters[name];

      if (rangeState?.type !== 'range') return;

      const nextSearchState = {
        ...stagedSearchState,
        filters: {
          ...stagedSearchState.filters,
          [name]: { ...rangeState, values },
        },
      };

      if (autoCommit) {
        commitSearchState(nextSearchState);
      } else {
        setStagedSearchState(nextSearchState);
      }
    },
    [commitSearchState, stagedSearchState]
  );

  const handleQueryFilterChange = useCallback(
    (query: string, autoCommit = false) => {
      const nextSearchState = {
        ...stagedSearchState,
        query,
      };

      if (autoCommit) {
        commitSearchState(nextSearchState);
      } else {
        setStagedSearchState(nextSearchState);
      }
    },
    [commitSearchState, stagedSearchState]
  );

  const handleSortFilterChange = useCallback(
    (sort: string, autoCommit = true) => {
      const nextSearchState = {
        ...stagedSearchState,
        sort,
      };

      if (autoCommit) {
        commitSearchState(nextSearchState);
      } else {
        setStagedSearchState(nextSearchState);
      }
    },
    [commitSearchState, stagedSearchState]
  );

  return (
    <ProductSearchContext
      value={{
        stagedSearchState,
        commitStagedSearchState,
        isSearchStateChanged,
        resetSearchState,
        handleCheckboxFilterChange,
        handleRangeFilterChange,
        handleQueryFilterChange,
        handleSortFilterChange,
        loadedFilters,
      }}
    >
      {children}
    </ProductSearchContext>
  );
};
