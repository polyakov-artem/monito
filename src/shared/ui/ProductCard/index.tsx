import clsx from 'clsx';
import type { ComponentProps, FC, ReactNode } from 'react';
import './index.scss';

export type ProductCardProps = {
  image: string;
  price: string;
  className?: string;
  title: string;
  specs: Record<string, string | undefined>;
  badge?: ReactNode;
  view?: string;
} & ComponentProps<'article'>;

export const ProductCard: FC<ProductCardProps> = props => {
  const { className, image, price, specs, title, badge, view } = props;

  const classes = clsx('product-card', view && `product-card_view_${view}`, className);

  return (
    <article className={classes}>
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={image} alt={title} />
      </div>
      <div className="product-card__content">
        <h5 className="product-card__title">{title}</h5>
        <ul className="product-card__specs">
          {Object.entries(specs).map(([key, value]) => (
            <li key={key} className="product-card__spec">
              <span className="product-card__spec-label">{key}:</span>
              <span className="product-card__spec-value">{value}</span>
            </li>
          ))}
        </ul>

        <p className="product-card__price">{price}</p>
        <div className="product-card__badge-wrap">{badge}</div>
      </div>
    </article>
  );
};
