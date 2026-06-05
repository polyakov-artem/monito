import { Slider } from '@/shared/ui/Slider';
import clsx from 'clsx';
import type { FC } from 'react';
import type { PropsWithClassName } from '@/shared/types/types';
import './index.scss';

const images = [
  '/customers/1.png',
  '/customers/2.png',
  '/customers/3.png',
  '/customers/4.png',
  '/customers/5.png',
];

const items = Array.from({ length: 5 }).fill(images).flat() as string[];

export const Customers: FC<PropsWithClassName> = ({ className }) => {
  const classes = clsx('customers', className);

  return (
    <div className={classes}>
      <h2 className="customers__title">Our lovely customer</h2>
      <div className="customers__slider-wrapper">
        <Slider images={items} className="customers__slider" />
      </div>
    </div>
  );
};
