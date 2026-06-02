import { type FC } from 'react';
import Dropdown from '@/shared/ui/Dropdown';
import { useProductsSearchContext } from '../../model/ProductSearchContext';
import { sortOptions } from '../../model/constants';

type SearchSortingProps = {
  className?: string;
};

export const SearchSorting: FC<SearchSortingProps> = ({ className }) => {
  const { stagedSearchState, handleSortFilterChange } = useProductsSearchContext();

  return (
    <Dropdown
      className={className}
      defaultValue={stagedSearchState.sort}
      view="filled"
      theme="primary"
      scale="m"
      options={sortOptions}
      titlePrefix="Sort by: "
      onChange={handleSortFilterChange}
    />
  );
};
