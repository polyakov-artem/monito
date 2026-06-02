import type { PropsWithClassName } from '@/shared/types/types';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import clsx from 'clsx';
import { useState, type FC } from 'react';
import { SearchWindow } from './SearchWindow';

export const ModalSearchBtn: FC<PropsWithClassName> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={clsx('modal-search-btn', className)}
        as="button"
        scale="m"
        view="ghost"
        iconOnly
        iconAfter={<SvgIcon iconId="search" />}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        renderModalWindow={(isPresent, onClose) => (
          <SearchWindow isPresent={isPresent} onClose={onClose} />
        )}
      ></Modal>
    </>
  );
};
