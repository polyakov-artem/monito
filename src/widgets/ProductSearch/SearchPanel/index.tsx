import { useState, type FC } from 'react';
import clsx from 'clsx';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import { SearchFilters, SearchSorting } from '@/features/searchProduct';
import { Button } from '@/shared/ui/Button';
import Collapse from '@/shared/ui/Collapse/Collapse';
import './index.scss';

type SearchPanelProps = {
  className?: string;
};

export const SearchPanel: FC<SearchPanelProps> = ({ className }) => {
  const classes = clsx('search-panel', className);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className={classes}>
      <div className="search-panel__title-block">
        <h4 className="search-panel__title">Small Dog</h4>
        <span className="search-panel__total">52 puppies</span>
      </div>

      <SearchSorting className="search-panel__sorting" />

      <Button
        className="search-panel__filter-btn"
        as="button"
        theme="primary"
        scale="m"
        view="filter"
        iconBefore={<SvgIcon iconId="filter" />}
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        Filter
      </Button>

      <Collapse className="search-panel__filter-wrapper" expanded={isFilterOpen}>
        <SearchFilters className="search-panel__filter" />
      </Collapse>
    </div>
  );
};
