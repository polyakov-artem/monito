import { useMemo, type FC } from 'react';
import clsx from 'clsx';
import { CheckboxFilter } from '@/shared/ui/CheckboxFilter';
import { RangeFilter } from '@/shared/ui/RangeFilter';
import './index.scss';
import { useProductsSearchContext } from '../../model/ProductSearchContext';
import { buildFilterViews } from '../../model/buildFilterViews';

type SearchFiltersProps = {
  className?: string;
};

export const SearchFilters: FC<SearchFiltersProps> = ({ className }) => {
  const classes = clsx('search-filters', className);

  const { handleCheckboxFilterChange, handleRangeFilterChange, stagedSearchState, loadedFilters } =
    useProductsSearchContext();

  const filterViews = useMemo(
    () => buildFilterViews(loadedFilters, stagedSearchState.filters),
    [loadedFilters, stagedSearchState.filters]
  );

  const content = filterViews.map(filter => {
    switch (filter.type) {
      case 'checkbox':
        return (
          <CheckboxFilter
            className="search-filters__filter"
            key={filter.name}
            title={filter.title}
            name={filter.name}
            options={filter.options}
            state={filter.value}
            onChange={handleCheckboxFilterChange}
          />
        );
      case 'range':
        return (
          <RangeFilter
            className="search-filters__filter"
            key={filter.name}
            title={filter.title}
            name={filter.name}
            state={filter.value}
            onChange={handleRangeFilterChange}
            min={filter.min}
            max={filter.max}
            step={filter.step}
          />
        );
      default:
        return null;
    }
  });

  return (
    <div className={classes}>
      <h4 className="search-filters__title">Filter</h4>
      <div className="search-filters__content">{content}</div>
    </div>
  );
};
