import React, { useEffect, useId, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import clsx from 'clsx';
import { usePresence } from '@/shared/lib/usePresence';

type Listener = () => void;

const modalManager = {
  stack: [] as string[],
  listeners: new Set<Listener>(),

  subscribe(listener: Listener) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  },

  notify() {
    this.listeners.forEach(listener => listener());
  },

  add(id: string) {
    if (!this.stack.includes(id)) {
      this.stack.push(id);
      this.notify();
    }
  },

  remove(id: string) {
    this.stack = this.stack.filter(i => i !== id);
    this.notify();
  },

  isTop(id: string) {
    return this.stack[this.stack.length - 1] === id;
  },

  getZIndex(id: string) {
    const index = this.stack.indexOf(id);
    return 1000 + index;
  },
};

function useModalStack(id: string) {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    return modalManager.subscribe(() => forceUpdate({}));
  }, []);

  return {
    isTop: modalManager.isTop(id),
    zIndex: modalManager.getZIndex(id),
    add: () => modalManager.add(id),
    remove: () => modalManager.remove(id),
  };
}

function useEscape(enabled: boolean, handler: () => void) {
  useEffect(() => {
    if (!enabled) return;

    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handler();
    };

    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [enabled, handler]);
}

function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);
}

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  closeOnBackdrop?: boolean;
  animationDuration?: number;
  renderModalWindow?: (isPresent: boolean, onClose: () => void) => React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnBackdrop = true,
  renderModalWindow,
  animationDuration = 300,
}) => {
  const id = useId();

  const { isTop, zIndex, add, remove } = useModalStack(id);

  const { isMounted, isPresent } = usePresence(isOpen, add, remove, animationDuration);

  useEscape(isMounted && isTop, onClose);
  useScrollLock(isMounted);

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <div
      className={clsx('modal', isPresent && 'modal_open')}
      style={{ zIndex, '--modal-transition-duration': `${animationDuration}ms` }}
      onClick={() => {
        if (isTop && closeOnBackdrop) onClose();
      }}
    >
      <div className="modal__backdrop" />

      <div className="modal__window-wrapper" onClick={e => e.stopPropagation()}>
        {renderModalWindow?.(isPresent, onClose)}
      </div>
    </div>,
    document.body
  );
};
