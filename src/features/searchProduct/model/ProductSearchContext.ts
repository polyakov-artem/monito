import { createStrictContext, useStrictContext } from '@/shared/lib/reactStrictContext';
import type { LoadedFilters, SearchState } from './types';

export type SetSearchDraftState = (
  state: SearchState | ((prev: SearchState) => SearchState)
) => void;

export type ProductSearchContextValue = {
  stagedSearchState: SearchState;
  commitStagedSearchState: () => void;
  isSearchStateChanged: boolean;
  resetSearchState: () => void;
  handleCheckboxFilterChange: (name: string, value: string, autoCommit?: boolean) => void;
  handleRangeFilterChange: (
    name: string,
    values: { currentMin: number; currentMax: number },
    autoCommit?: boolean
  ) => void;
  handleQueryFilterChange: (query: string, autoCommit?: boolean) => void;
  handleSortFilterChange: (sort: string, autoCommit?: boolean) => void;
  loadedFilters?: LoadedFilters;
};

export const ProductSearchContext = createStrictContext<ProductSearchContextValue>();

export const useProductsSearchContext = () => {
  return useStrictContext(ProductSearchContext);
};
