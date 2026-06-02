import { FILTER_PREFIX, PER_PAGE, sortOptions } from './constants';
import type { LoadedFilters, SearchState } from './types';

export const createNextSearchParams = (
  currentSearchParams: string,
  searchState: SearchState,
  loadedFilters?: LoadedFilters
) => {
  const nextSearchParams = new URLSearchParams(currentSearchParams);
  const { page, perPage, sort, query, filters, category } = searchState;

  [...nextSearchParams.keys()].forEach(key => {
    if (key.startsWith(FILTER_PREFIX)) {
      nextSearchParams.delete(key);
    }
  });

  const setOrDelete = (key: string, value: string) => {
    const trimmed = value.trim();

    if (trimmed) {
      nextSearchParams.set(key, trimmed);
    } else {
      nextSearchParams.delete(key);
    }
  };

  setOrDelete('page', page > 1 ? page.toString() : '');
  setOrDelete('sort', sort !== sortOptions[0].value ? sort : '');
  setOrDelete('query', query);
  setOrDelete('perPage', perPage !== PER_PAGE ? perPage.toString() : '');
  setOrDelete('category', category);

  const rangeBounds = new Map<string, { min: number; max: number }>();
  loadedFilters?.forEach(loadedFilter => {
    if (loadedFilter.type === 'range') {
      rangeBounds.set(loadedFilter.name, { min: loadedFilter.min, max: loadedFilter.max });
    }
  });

  Object.entries(filters).forEach(([name, filterState]) => {
    switch (filterState.type) {
      case 'checkbox': {
        const nextValue = filterState.values.join(';');

        if (nextValue.length > 0) {
          nextSearchParams.set(`${FILTER_PREFIX}${name}`, nextValue);
        }
        break;
      }
      case 'range': {
        const { currentMin, currentMax } = filterState.values;
        const bounds = rangeBounds.get(name);
        const isFullRange = bounds && currentMin === bounds.min && currentMax === bounds.max;

        if (!isFullRange) {
          nextSearchParams.set(`${FILTER_PREFIX}${name}`, `${currentMin};${currentMax}`);
        }
        break;
      }
    }
  });

  return nextSearchParams;
};
