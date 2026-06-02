import type { FC } from 'react';
import clsx from 'clsx';
import { routerPaths } from '@/shared/config/routes';
import { ShowcaseLayout } from '../../shared/ui/ShowcaseLayout';
import pets from '@/data/pets.json';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/shared/ui/ProductCard';
import './index.scss';

type PetsShowcaseProps = {
  className?: string;
};

export const PetsShowcase: FC<PetsShowcaseProps> = ({ className }) => {
  const classes = clsx('pets-showcase', className);

  return (
    <ShowcaseLayout
      className={classes}
      subtitle="What's new"
      title="Take a look at some of our pets"
      link={routerPaths.category}
      linkText="View more"
    >
      <div className="pets-showcase__grid">
        {pets.map((pet, index) => (
          <Link to={routerPaths.details} key={index} className="pets-showcase__card">
            <ProductCard {...pet} />
          </Link>
        ))}
      </div>
    </ShowcaseLayout>
  );
};
