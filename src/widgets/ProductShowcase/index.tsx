import type { FC } from 'react';
import clsx from 'clsx';
import { routerPaths } from '@/shared/config/routes';
import { ShowcaseLayout } from '../../shared/ui/ShowcaseLayout';
import { Link } from 'react-router-dom';
import { ProductCard, type Product } from '@/entities/product';
import { CardBadge } from '@/shared/ui/CardBadge';
import './index.scss';

type ProductShowcaseProps = {
  className?: string;
  title: string;
  subtitle: string;
  linkText: string;
  type?: 'pet' | 'product';
  products: Product[];
};

export const ProductShowcase: FC<ProductShowcaseProps> = ({
  className,
  title,
  subtitle,
  linkText,
  type,
  products,
}) => {
  const classes = clsx('product-showcase', className);

  return (
    <ShowcaseLayout
      className={classes}
      subtitle={subtitle}
      title={title}
      link={routerPaths.details}
      linkText={linkText}
    >
      <div className="product-showcase__grid">
        {products.map((product, index) => (
          <Link to={routerPaths.details} key={index} className="product-showcase__card">
            <ProductCard
              withPriceSpacing={type === 'product'}
              {...product}
              badge={product.badge ? <CardBadge {...product.badge} /> : undefined}
            />
          </Link>
        ))}
      </div>
    </ShowcaseLayout>
  );
};
