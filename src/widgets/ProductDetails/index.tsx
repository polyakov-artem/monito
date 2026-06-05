import type { FC } from 'react';
import clsx from 'clsx';
import { Gallery } from '@/shared/ui/Gallery';
import { ProductGuaranties } from './ProductGuaranties';
import { Share } from './Share';
import { ProductSpecs } from './ProductSpecs';
import { Button } from '@/shared/ui/Button';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import { routerPaths } from '@/shared/config/routes';
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs';
import './index.scss';

type ProductDetailsProps = {
  className?: string;
  title: string;
  price: string;
  sku: string;
  specs: Record<string, string>;
  images: string[];
};

const crumbs = [
  { to: routerPaths.category, name: 'Home' },
  { to: routerPaths.category, name: 'Dog' },
  { to: routerPaths.category, name: 'Large Dog' },
  { to: routerPaths.category, name: 'Shiba Inu Sepia' },
];

export const ProductDetails: FC<ProductDetailsProps> = ({
  className,
  title,
  price,
  sku,
  specs,
  images,
}) => {
  const classes = clsx('product-details', className);

  return (
    <section className={classes}>
      <div className="product-details__gallery-wrap">
        <Gallery className="product-details__gallery" images={images} />
        <ProductGuaranties className="product-details__guaranties-desktop" />
        <Share className="product-details__share-desktop" text="Share:" />
      </div>
      <div className="product-details__content-wrap">
        <Breadcrumbs crumbs={crumbs} className="product-details__breadcrumbs" />
        <p className="product-details__sku">SKU {sku}</p>
        <h2 className="product-details__title">{title}</h2>
        <p className="product-details__price">{price}</p>
        <div className="product-details__actions">
          <Button to="#" as="link" theme="primary" scale="l" view="default" rounded="pill">
            Contact us
          </Button>
          <Button
            to="#"
            as="link"
            theme="primary"
            scale="l"
            view="outline"
            rounded="pill"
            iconBefore={<SvgIcon iconId="chat" />}
          >
            Chat with Monito
          </Button>
        </div>
        <div className="product-details__specs-header">
          <p className="product-details__specs-title">Information</p>
          <Share className="product-details__share-mobile" text="Share" />
        </div>
        <ProductSpecs className="product-details__specs" specs={specs} />
        <ProductGuaranties className="product-details__guaranties-mobile" />
      </div>
    </section>
  );
};
