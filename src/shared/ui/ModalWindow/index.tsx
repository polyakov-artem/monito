import clsx from 'clsx';
import { Button } from '../Button';
import { SvgIcon } from '../SvgIcon';
import { type FC } from 'react';
import './index.scss';

type ModalWindowProps = {
  className?: string;
  isPresent: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  withCloseButton?: boolean;
};

export const ModalWindow: FC<ModalWindowProps> = ({
  isPresent,
  onClose,
  withCloseButton,
  children,
  className,
}) => {
  const classes = clsx('modal-window', isPresent && 'modal-window_open', className);

  return (
    <div className={classes}>
      {withCloseButton && (
        <Button
          className="modal-window__close-btn"
          as="button"
          iconAfter={<SvgIcon iconId="close" />}
          onClick={onClose}
          scale="m"
          view="ghost"
          rounded="full"
          iconOnly
        />
      )}

      <div className="modal-window__wrapper">
        <div className="modal-window__content">{children}</div>
      </div>
    </div>
  );
};
