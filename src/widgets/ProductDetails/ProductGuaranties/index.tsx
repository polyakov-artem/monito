import { SvgIcon } from '@/shared/ui/SvgIcon';
import './index.scss';
import type { PropsWithClassName } from '@/shared/types/types';
import clsx from 'clsx';
import type { FC } from 'react';

export const ProductGuaranties: FC<PropsWithClassName> = ({ className }) => {
  const classes = clsx('product-guaranties', className);

  return (
    <ul className={classes}>
      <li className="product-guaranties__item">
        <SvgIcon iconId="heart" className="product-guaranties__icon" />
        <span className="product-guaranties__text">100% health guarantee for pets</span>
      </li>
      <li className="product-guaranties__item">
        <SvgIcon iconId="pets" className="product-guaranties__icon" />
        <span className="product-guaranties__text">100% guarantee of pet identification</span>
      </li>
    </ul>
  );
};
