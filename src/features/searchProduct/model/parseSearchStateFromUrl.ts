import { FILTER_PREFIX } from './constants';
import { normalizeSearchState } from './normalizeSearchState';
import type { CheckboxFilter, LoadedFilters, RangeFilter, SearchState } from './types';

const toNumber = (value: string | null) => (value ? Number(value) : NaN);

const extractCheckboxFilter = (searchParams: URLSearchParams, loadedFilter: CheckboxFilter) => {
  const valueRaw = searchParams.get(`${FILTER_PREFIX}${loadedFilter.name}`) || '';
  const values = valueRaw.split(';').filter(Boolean);
  return { type: 'checkbox' as const, values };
};

const extractRangeFilter = (searchParams: URLSearchParams, loadedFilter: RangeFilter) => {
  const valueRaw = searchParams.get(`${FILTER_PREFIX}${loadedFilter.name}`) || '';
  const [minRaw, maxRaw] = valueRaw.split(';');
  return {
    type: 'range' as const,
    values: { currentMin: toNumber(minRaw ?? null), currentMax: toNumber(maxRaw ?? null) },
  };
};

const extractFilters = (searchParams: URLSearchParams, loadedFilters?: LoadedFilters) => {
  const filters = {} as SearchState['filters'];

  loadedFilters?.forEach(loadedFilter => {
    switch (loadedFilter.type) {
      case 'checkbox': {
        filters[loadedFilter.name] = extractCheckboxFilter(searchParams, loadedFilter);
        break;
      }
      case 'range': {
        filters[loadedFilter.name] = extractRangeFilter(searchParams, loadedFilter);
        break;
      }
    }
  });

  return filters;
};

export const parseSearchStateFromUrl = (
  searchParamsString: string,
  loadedFilters?: LoadedFilters
) => {
  const searchParams = new URLSearchParams(searchParamsString);

  const rawState: SearchState = {
    category: searchParams.get('category') || '',
    query: searchParams.get('query') || '',
    sort: searchParams.get('sort') || '',
    page: toNumber(searchParams.get('page')),
    perPage: toNumber(searchParams.get('perPage')),
    filters: extractFilters(searchParams, loadedFilters),
  };

  return normalizeSearchState(rawState, loadedFilters);
};
