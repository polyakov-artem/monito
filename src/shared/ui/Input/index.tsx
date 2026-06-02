import { type FC, type ReactNode, type ComponentProps } from 'react';
import clsx from 'clsx';
import './index.scss';

export type InputProps = ComponentProps<'input'> & {
  theme?: string;
  view?: string;
  scale?: string | number;
  loading?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  iconBeforeName?: string;
  iconAfterName?: string;
  invalid?: boolean;
  className?: string;
  spinnerAfter?: ReactNode;
  spinnerName?: string;
  spinnerBefore?: ReactNode;
  rounded?: string;
};

const root = 'input';

export const Input: FC<InputProps> = props => {
  const {
    theme,
    view,
    scale,
    loading,
    disabled,
    iconBefore,
    iconAfter,
    invalid,
    className,
    spinnerBefore,
    spinnerAfter,
    iconBeforeName,
    iconAfterName,
    spinnerName,
    rounded,
    ...componentProps
  } = props;

  const classes = clsx(
    root,
    theme && `${root}_theme_${theme}`,
    view && `${root}_view_${view}`,
    scale && `${root}_scale_${scale}`,
    loading && `${root}_loading`,
    invalid && `${root}_invalid`,
    disabled && `${root}_disabled`,
    spinnerBefore && `${root}_spinner-before`,
    spinnerAfter && `${root}_spinner-after`,
    spinnerName && `${root}_spinner_${spinnerName}`,
    iconBefore && `${root}_icon-before`,
    iconAfter && `${root}_icon-after`,
    iconBeforeName && `${root}_icon-before_${iconBeforeName}`,
    iconAfterName && `${root}_icon-after_${iconAfterName}`,
    rounded && `${root}_rounded_${rounded}`,
    className
  );

  const hasLeftSlot = iconBefore || (loading && spinnerBefore);
  const hasRightSlot = iconAfter || (loading && spinnerAfter);

  return (
    <div className={classes}>
      {hasLeftSlot && (
        <span className={`${root}__icons ${root}__icons_before`}>
          {iconBefore && <span className={`${root}__icon ${root}__icon_before`}>{iconBefore}</span>}
          {loading && spinnerBefore && (
            <span className={`${root}__spinner ${root}__spinner_before`}>{spinnerBefore}</span>
          )}
        </span>
      )}

      <input className={`${root}__field`} {...componentProps} disabled={disabled} />

      {hasRightSlot && (
        <span className={`${root}__icons ${root}__icons_after`}>
          {loading && spinnerAfter && (
            <span className={`${root}__spinner ${root}__spinner_after`}>{spinnerAfter}</span>
          )}
          {iconAfter && <span className={`${root}__icon ${root}__icon_after`}>{iconAfter}</span>}
        </span>
      )}
    </div>
  );
};
