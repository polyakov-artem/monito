import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import './index.scss';

export type SvgIconProps = { iconId: string; scale?: string } & ComponentProps<'svg'>;

const root = 'icon';

export const SvgIcon: FC<SvgIconProps> = props => {
  const { className, iconId, scale, ...restProps } = props;
  const classes = clsx(root, scale && `${root}_scale_${scale}`, className);

  return (
    <svg className={classes} {...restProps}>
      <use xlinkHref={`#${iconId}`} />
    </svg>
  );
};
