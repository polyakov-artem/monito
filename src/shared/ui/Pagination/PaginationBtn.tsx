import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type PaginationBtnProps = {
  direction: 'prev' | 'next';
  disabled: boolean;
  icon: ReactNode;
  to: string;
};
export const PaginationBtn: FC<PaginationBtnProps> = ({ direction, disabled, icon, to }) => {
  const linkClasses = clsx('pagination__link', `pagination__link-${direction}`, {
    pagination__link_disabled: disabled,
  });

  return (
    <li className="pagination__item">
      {disabled ? (
        <span className={linkClasses}>
          <span className="pagination__icon">{icon}</span>
        </span>
      ) : (
        <Link className={linkClasses} to={to} relative="path">
          <span className="pagination__icon">{icon}</span>
        </Link>
      )}
    </li>
  );
};
