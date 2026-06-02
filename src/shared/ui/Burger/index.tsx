import type { ComponentProps } from 'react';
import './index.scss';
import clsx from 'clsx';

type BurgerProps = {
  isOpen?: boolean;
  className?: string;
} & ComponentProps<'button'>;

export const Burger = ({ isOpen, className, ...props }: BurgerProps) => {
  return (
    <button type="button" {...props} className={clsx('burger', isOpen && 'burger_open', className)}>
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </button>
  );
};
