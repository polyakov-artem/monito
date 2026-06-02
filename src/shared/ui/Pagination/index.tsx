import { memo, useMemo, type FC, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import { PaginationItem } from './PaginationItem';
import { PaginationBtn } from './PaginationBtn';
import './index.scss';

const createLinkUrl = (
  pathname: string,
  currentParams: string,
  value: number | string,
  paramKey: string
) => {
  const searchParams = new URLSearchParams(currentParams);
  searchParams.set(paramKey, String(value));
  return `${pathname}?${searchParams.toString()}`;
};

const createArrayOfNumbers = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

type CreatePaginationRangeProps = {
  numberOfPages: number;
  numOfVisibleElements: number;
  currentPage: number;
  placeholder: string;
};

const createPaginationRange = ({
  numberOfPages,
  numOfVisibleElements,
  currentPage,
  placeholder,
}: CreatePaginationRangeProps): (number | string)[] => {
  if (numberOfPages <= numOfVisibleElements) {
    return createArrayOfNumbers(1, numberOfPages);
  }

  const first = 1;
  const last = numberOfPages;

  const sideRange = numOfVisibleElements - 3;
  const middleRange = numOfVisibleElements - 4;

  const showLeftOnly = currentPage <= 4;
  const showRightOnly = currentPage >= last - 3;

  if (showLeftOnly) {
    return [...createArrayOfNumbers(first, first + sideRange), placeholder, last];
  }

  if (showRightOnly) {
    return [first, placeholder, ...createArrayOfNumbers(last - sideRange, last)];
  }

  const leftOffset = Math.floor((middleRange - 1) / 2);
  const rightOffset = middleRange - leftOffset - 1;

  return [
    first,
    placeholder,
    ...createArrayOfNumbers(currentPage - leftOffset, currentPage + rightOffset),
    placeholder,
    last,
  ];
};

export type PaginationProps = {
  pageKey?: string;
  totalCount?: number;
  perPageCount: number;
  numOfVisibleElements?: number;
  className?: string;
  prevBtnIcon?: ReactNode;
  nextBtnIcon?: ReactNode;
  placeholder?: string;
  currentPage: number;
};

const Pagination: FC<PaginationProps> = ({
  pageKey = 'page',
  totalCount = 0,
  perPageCount,
  numOfVisibleElements = 7,
  currentPage,
  className,
  prevBtnIcon = '«',
  nextBtnIcon = '»',
  placeholder = '...',
}) => {
  if (numOfVisibleElements < 7) {
    throw new Error('Number of visible buttons should be at least 7');
  }

  if (perPageCount <= 0) {
    throw new Error('perPageCount should be greater than 0');
  }

  const { pathname, search } = useLocation();

  const numberOfPages = Math.max(1, Math.ceil(totalCount / perPageCount));

  const paginationRange = useMemo(
    () =>
      createPaginationRange({
        numberOfPages,
        currentPage,
        numOfVisibleElements,
        placeholder,
      }),
    [numberOfPages, currentPage, numOfVisibleElements, placeholder]
  );

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numberOfPages;

  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <ul className={clsx('pagination', className)}>
      <PaginationBtn
        direction="prev"
        disabled={isFirstPage}
        icon={prevBtnIcon}
        to={createLinkUrl(pathname, search, currentPage - 1, pageKey)}
      />

      {paginationRange.map((page, index) => (
        <PaginationItem
          key={`${page}-${index}`}
          page={page}
          isActive={currentPage === page}
          to={createLinkUrl(pathname, search, page, pageKey)}
          placeholder={placeholder}
        />
      ))}

      <PaginationBtn
        direction="next"
        disabled={isLastPage}
        icon={nextBtnIcon}
        to={createLinkUrl(pathname, search, currentPage + 1, pageKey)}
      />
    </ul>
  );
};

export default memo(Pagination);
