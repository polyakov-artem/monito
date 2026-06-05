import clsx from 'clsx';
import { useMemo, type FC } from 'react';
import './index.scss';

type ProductSpecsProps = {
  specs: Record<string, string>;
  className?: string;
};

export const ProductSpecs: FC<ProductSpecsProps> = ({ specs, className }) => {
  const classes = clsx('product-specs', className);

  const items = useMemo(
    () =>
      Object.entries(specs).map(([key, value]) => (
        <li key={key} className="product-specs__item">
          <span className="product-specs__label">{key}</span>
          <span className="product-specs__value">{value}</span>
        </li>
      )),
    [specs]
  );
  return <ul className={classes}>{items}</ul>;
};
