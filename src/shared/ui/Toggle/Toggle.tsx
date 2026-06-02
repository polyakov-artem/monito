import clsx from 'clsx';
import type { ComponentProps, FC, ReactNode } from 'react';
import './index.scss';

export type ToggleProps = ComponentProps<'input'> & {
  theme?: string;
  element?: 'checkbox' | 'radio' | 'switch';
  scale?: string;
  invalid?: boolean;
  icon?: ReactNode;
  iconName?: string;
  view?: string;
};

const root = 'toggle';

export const Toggle: FC<ToggleProps> = props => {
  const { theme, element, scale, view, invalid, className, icon, iconName, ...componentProps } =
    props;

  const classes = clsx(
    root,
    theme && `${root}_theme_${theme}`,
    element && `${root}_element_${element}`,
    scale && `${root}_scale_${scale}`,
    invalid && `${root}_invalid`,
    view && `${root}_view_${view}`,
    iconName && `${root}_icon_${iconName}`,
    className
  );

  return (
    <label className={classes}>
      <input className={`${root}__input`} {...componentProps} />
      <span className={`${root}__box`}>
        <span className={`${root}__icon`}>{icon}</span>
      </span>
    </label>
  );
};
