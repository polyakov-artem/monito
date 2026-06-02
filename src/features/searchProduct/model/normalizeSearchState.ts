import { PER_PAGE, PER_PAGE_MAX, sortOptions } from './constants';
import type { LoadedFilters, SearchState } from './types';

const normalizePage = (page: number) => (Number.isInteger(page) && page > 0 ? page : 1);

const normalizePerPage = (perPage: number) =>
  Number.isInteger(perPage) && perPage > 0 && perPage <= PER_PAGE_MAX ? perPage : PER_PAGE;

const normalizeSort = (sort: string) =>
  sortOptions.some(option => option.value === sort) ? sort : sortOptions[0].value;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const normalizeSearchState = (
  state: SearchState,
  loadedFilters?: LoadedFilters
): SearchState => {
  const filters: SearchState['filters'] = {};

  loadedFilters?.forEach(loadedFilter => {
    const current = state.filters[loadedFilter.name];

    switch (loadedFilter.type) {
      case 'checkbox': {
        const allowed = new Set(loadedFilter.options.map(option => option.value));
        const rawValues = current?.type === 'checkbox' ? current.values : [];
        const values = [...new Set(rawValues)].filter(value => allowed.has(value));
        filters[loadedFilter.name] = { type: 'checkbox', values };
        break;
      }
      case 'range': {
        const { min, max } = loadedFilter;
        const raw = current?.type === 'range' ? current.values : null;

        let currentMin = raw && Number.isFinite(raw.currentMin) ? clamp(raw.currentMin, min, max) : min;
        let currentMax = raw && Number.isFinite(raw.currentMax) ? clamp(raw.currentMax, min, max) : max;

        if (currentMin > currentMax) [currentMin, currentMax] = [currentMax, currentMin];

        filters[loadedFilter.name] = { type: 'range', values: { currentMin, currentMax } };
        break;
      }
    }
  });

  return {
    category: state.category ?? '',
    query: (state.query ?? '').trim(),
    sort: normalizeSort(state.sort),
    page: normalizePage(state.page),
    perPage: normalizePerPage(state.perPage),
    filters,
  };
};
