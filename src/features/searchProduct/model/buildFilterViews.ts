import type { FilterView, LoadedFilters, SearchState } from './types';

export const buildFilterViews = (
  loadedFilters: LoadedFilters | undefined,
  filtersState: SearchState['filters']
): FilterView[] => {
  if (!loadedFilters) return [];

  const views: FilterView[] = [];

  loadedFilters.forEach(loadedFilter => {
    const state = filtersState[loadedFilter.name];

    if (loadedFilter.type === 'checkbox' && state?.type === 'checkbox') {
      views.push({ ...loadedFilter, value: state.values });
    } else if (loadedFilter.type === 'range' && state?.type === 'range') {
      views.push({ ...loadedFilter, value: state.values });
    }
  });

  return views;
};
