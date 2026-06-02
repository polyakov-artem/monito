import clsx from 'clsx';
import { type ComponentProps, type FC, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import './index.scss';

export type ButtonCustomProps = {
  theme?: string;
  view?: string;
  scale?: string;
  fullWidth?: boolean;
  selected?: boolean;
  loading?: boolean;
  disabled?: boolean;
  iconBefore?: ReactNode;
  iconBeforeName?: string;
  iconAfter?: ReactNode;
  iconAfterName?: string;
  spinnerName?: string;
  spinnerAfter?: ReactNode;
  spinnerBefore?: ReactNode;
  count?: number;
  rounded?: string;
  iconOnly?: boolean;
  children?: ReactNode;
  className?: string;
};

export type ButtonProps =
  | ((ComponentProps<'button'> & { as: 'button' }) & ButtonCustomProps)
  | ((LinkProps & { as: 'link' }) & ButtonCustomProps)
  | ((ComponentProps<'a'> & { as: 'a' }) & ButtonCustomProps);

const root = 'btn';

export const Button: FC<ButtonProps> = props => {
  const {
    as,
    theme,
    view,
    scale,
    fullWidth,
    selected,
    loading,
    disabled,
    iconBefore,
    iconAfter,
    iconBeforeName,
    iconAfterName,
    count,
    spinnerName,
    spinnerAfter,
    spinnerBefore,
    iconOnly,
    rounded,
    children,
    className,
    ...rest
  } = props;

  const isDisabled = disabled || loading;

  const classes = clsx(
    root,
    theme && `${root}_theme_${theme}`,
    view && `${root}_view_${view}`,
    scale && `${root}_scale_${scale}`,
    fullWidth && `${root}_full-width`,
    selected && `${root}_selected`,
    loading && `${root}_loading`,
    isDisabled && `${root}_disabled`,
    iconBeforeName && `${root}_icon-before_${iconBeforeName}`,
    iconAfterName && `${root}_icon-after_${iconAfterName}`,
    spinnerName && `${root}_spinner_${spinnerName}`,
    rounded && `${root}_rounded_${rounded}`,
    iconOnly && `${root}_icon-only`,
    className
  );

  const content = (
    <span className={`${root}__inner`}>
      {iconBefore && <span className={`${root}__icon ${root}__icon_before`}>{iconBefore}</span>}

      {loading && spinnerBefore && (
        <span className={`${root}__spinner ${root}__spinner_before`}>{spinnerBefore}</span>
      )}

      {children && <span className={`${root}__text`}>{children}</span>}

      {iconAfter && <span className={`${root}__icon ${root}__icon_after`}>{iconAfter}</span>}

      {count !== undefined && <span className={`${root}__count`}>{count}</span>}

      {loading && spinnerAfter && (
        <span className={`${root}__spinner ${root}__spinner_after`}>{spinnerAfter}</span>
      )}
    </span>
  );

  if (as === 'a') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href, target, rel, download, ping, referrerPolicy, ...spanProps } =
      rest as ComponentProps<'a'>;

    return isDisabled ? (
      <span {...spanProps} className={classes}>
        {content}
      </span>
    ) : (
      <a {...(rest as ComponentProps<'a'>)} className={classes}>
        {content}
      </a>
    );
  }

  if (as === 'link') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { to, replace, state, reloadDocument, preventScrollReset, relative, ...spanProps } =
      rest as LinkProps;

    return isDisabled ? (
      <span {...spanProps} className={classes}>
        {content}
      </span>
    ) : (
      <Link {...(rest as LinkProps)} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button {...(rest as ComponentProps<'button'>)} className={classes} disabled={isDisabled}>
      {content}
    </button>
  );
};
