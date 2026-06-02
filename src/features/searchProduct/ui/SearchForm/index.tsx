import { Input } from '@/shared/ui/Input';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import clsx from 'clsx';
import { type ChangeEvent, type FC, type SubmitEventHandler } from 'react';
import './index.scss';
import { useProductsSearchContext } from '../../model/ProductSearchContext';

export const SearchForm: FC<{
  scale?: string;
  rounded?: string;
  autoFocus?: boolean;
  className?: string;
  withSpacing?: boolean;
  onSubmit?: () => void;
}> = ({ className, scale, rounded, autoFocus, withSpacing, onSubmit }) => {
  const { stagedSearchState, handleQueryFilterChange, commitStagedSearchState } =
    useProductsSearchContext();
  const { query } = stagedSearchState;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleQueryFilterChange(e.target.value);
  };

  const handleSearch: SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    commitStagedSearchState();
    onSubmit?.();
  };

  return (
    <form
      className={clsx('search-form', withSpacing && 'search-form_with-spacing', className)}
      onSubmit={handleSearch}
    >
      <Input
        autoFocus={autoFocus}
        iconBefore={<SvgIcon iconId="search" />}
        placeholder="Search something here!"
        theme="primary"
        rounded={rounded}
        scale={scale}
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};
