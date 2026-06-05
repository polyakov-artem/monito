import type { FC } from 'react';
import clsx from 'clsx';
import { routerPaths } from '@/shared/config/routes';
import { ShowcaseLayout } from '../../shared/ui/ShowcaseLayout';
import products from '@/data/products.json';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/entities/product';
import { CardBadge } from '@/shared/ui/CardBadge';
import './index.scss';

type ProductsShowcaseProps = {
  className?: string;
};

export const ProductsShowcase: FC<ProductsShowcaseProps> = ({ className }) => {
  const classes = clsx('products-showcase', className);

  return (
    <ShowcaseLayout
      className={classes}
      subtitle="Hard to choose right products for your pets?"
      title="Our Products"
      link={routerPaths.category}
      linkText="View more"
    >
      <div className="products-showcase__grid">
        {products.map((product, index) => (
          <Link to={routerPaths.details} key={index} className="products-showcase__card">
            <ProductCard
              withPriceSpacing
              {...product}
              badge={product.badge ? <CardBadge {...product.badge} /> : undefined}
            />
          </Link>
        ))}
      </div>
    </ShowcaseLayout>
  );
};
