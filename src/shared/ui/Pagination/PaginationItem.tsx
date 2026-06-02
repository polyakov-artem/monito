import clsx from 'clsx';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

type PaginationItemProps = {
  page: number | string;
  placeholder: string;
  isActive: boolean;
  to: string;
};

export const PaginationItem: FC<PaginationItemProps> = ({ page, isActive, placeholder, to }) => {
  if (page === placeholder) {
    return (
      <li className="pagination__item">
        <span className="pagination__placeholder">{placeholder}</span>
      </li>
    );
  }

  const linkClasses = clsx('pagination__link', {
    pagination__link_active: isActive,
  });

  return (
    <li className="pagination__item">
      <Link className={linkClasses} to={to} relative="path">
        {page}
      </Link>
    </li>
  );
};
