import { type FC } from 'react';
import clsx from 'clsx';
import './index.scss';
import { ProductCard } from '@/entities/product';
import { Link } from 'react-router-dom';
import { routerPaths } from '@/shared/config/routes';
import type { Pet } from '../types';

type SearchResultsProps = {
  className?: string;
  data: Pet[];
};

export const SearchResults: FC<SearchResultsProps> = ({ className, data }) => {
  const classes = clsx('search-results', className);

  return (
    <div className={classes}>
      {data.map((pet, index) => (
        <Link to={routerPaths.details} key={index} className="search-results__card">
          <ProductCard {...pet} />
        </Link>
      ))}
    </div>
  );
};
