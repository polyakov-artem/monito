import { type FC } from 'react';
import clsx from 'clsx';
import Pagination from '@/shared/ui/Pagination';
import pets from '@/data/pets.json';
import { SearchResults } from './SearchResults';
import { SvgIcon } from '../../shared/ui/SvgIcon/index';
import type { Pet } from './types';
import { SearchPanel } from './SearchPanel';
import { SearchFilters } from '@/features/searchProduct';
import './index.scss';

const data = Array.from({ length: 2 }).fill(pets).flat().slice(0, -1) as Pet[];

type ProductSearchProps = {
  className?: string;
};

export const ProductSearch: FC<ProductSearchProps> = ({ className }) => {
  const classes = clsx('product-search', className);

  return (
    <section className={classes}>
      <div className="product-search__aside-column">
        <SearchFilters className="product-search__filter" />
      </div>
      <div className="product-search__main-column">
        <SearchPanel className="product-search__panel" />
        <SearchResults className="product-search__results" data={data} />
        <Pagination
          className="product-search__pagination"
          perPageCount={15}
          totalCount={418}
          currentPage={1}
          prevBtnIcon={<SvgIcon iconId="arrow-left" />}
          nextBtnIcon={<SvgIcon iconId="arrow-right" />}
        />
      </div>
    </section>
  );
};
