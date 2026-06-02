import clsx from 'clsx';
import type { FC } from 'react';
import { RangeInput, type RangeInputProps } from '../RangeInput';
import './index.scss';

export type RangeFilterProps = RangeInputProps & {
  title: string;
};

export const RangeFilter: FC<RangeFilterProps> = ({ className, title, ...props }) => {
  const classes = clsx('range-filter', className);

  return (
    <div className={classes}>
      <h4 className="range-filter__title">{title}</h4>
      <RangeInput {...props} />
    </div>
  );
};
