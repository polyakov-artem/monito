import { useMemo, type FC } from 'react';
import './index.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { SvgIcon } from '../SvgIcon';

export type TBreadcrumbsProps = {
  crumbs: Array<{ to: string; name: string }>;
  className?: string;
};

export const Breadcrumbs: FC<TBreadcrumbsProps> = ({ crumbs, className }) => {
  const classes = clsx('breadcrumbs', className);

  const items = useMemo(() => {
    const hasFewCrumbs = crumbs.length > 1;
    const separator = (
      <span className="breadcrumbs__item-separator">
        <SvgIcon iconId="caret-right" />
      </span>
    );

    return crumbs.map((crumb, index) => {
      const isCurrent = index === crumbs.length - 1;

      return (
        <li
          key={crumb.name}
          className={clsx('breadcrumbs__item', isCurrent && 'breadcrumbs__item_current')}
        >
          {isCurrent ? (
            <span className="breadcrumbs__item-text">{crumb.name}</span>
          ) : (
            <Link key={crumb.to} to={crumb.to} className="breadcrumbs__item-link">
              {crumb.name}
            </Link>
          )}
          {hasFewCrumbs && !isCurrent && separator}
        </li>
      );
    });
  }, [crumbs]);

  return (
    <nav className={classes}>
      <ul className="breadcrumbs__list">{items}</ul>
    </nav>
  );
};
