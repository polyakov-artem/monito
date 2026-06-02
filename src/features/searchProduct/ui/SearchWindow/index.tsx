import { type FC } from 'react';
import { SearchForm } from '../SearchForm';
import { ModalWindow } from '@/shared/ui/ModalWindow';
import './index.scss';

type SearchWindowProps = {
  isPresent: boolean;
  onClose?: () => void;
};

export const SearchWindow: FC<SearchWindowProps> = ({ isPresent, onClose }) => {
  return (
    <ModalWindow className="search-window" isPresent={isPresent} onClose={onClose}>
      <SearchForm scale="s" rounded="m" onSubmit={onClose} autoFocus withSpacing />
    </ModalWindow>
  );
};
