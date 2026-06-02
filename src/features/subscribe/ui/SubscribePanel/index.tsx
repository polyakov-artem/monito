import clsx from 'clsx';
import type { FC } from 'react';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import './index.scss';

export type SubscribePanelProps = {
  className?: string;
};

export const SubscribePanel: FC<SubscribePanelProps> = props => {
  const { className } = props;

  const classes = clsx('subscribe-panel', className);

  return (
    <div className={classes}>
      <div className="subscribe-panel__box">
        <h4 className="subscribe-panel__title">Register now so you don't miss our programs</h4>
        <div className="subscribe-panel__form">
          <Input
            className="subscribe-panel__input"
            scale="l"
            rounded="m"
            placeholder="Enter your email"
            theme="primary"
          />
          <Button
            className="subscribe-panel__button"
            as="button"
            theme="primary"
            scale="l"
            view="default"
            rounded="m"
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </div>
  );
};
