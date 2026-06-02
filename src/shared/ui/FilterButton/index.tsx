import clsx from 'clsx';
import type { ComponentProps, FC, ReactNode } from 'react';
import './index.scss';

type FilterButtonProps = {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
} & ComponentProps<'button'>;

export const FilterButton: FC<FilterButtonProps> = ({
  className,
  children,
  icon,
  active,
  ...rest
}) => {
  const classes = clsx('filter-btn', active && 'filter-btn_active', className);

  return (
    <button {...rest} className={classes}>
      <span className="filter-btn__content">
        <span className="filter-btn__icon">{icon}</span>
        {children}
      </span>
    </button>
  );
};
