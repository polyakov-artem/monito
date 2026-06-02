import { Button } from '@/shared/ui/Button';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import './index.scss';
import type { PropsWithClassName } from '@/shared/types/types';
import clsx from 'clsx';
import type { FC } from 'react';

export const PrimaryBanner: FC<PropsWithClassName> = ({ className }) => {
  return (
    <section className={clsx('primary-banner', className)}>
      <div className="container">
        <div className="primary-banner__box">
          <div className="primary-banner__main">
            <h1 className="primary-banner__title">
              One more friend <br /> <span>Thousands more fun!</span>
            </h1>
            <p className="primary-banner__text">
              Having a pet means you have more joy, a new friend, a happy person who will always be
              with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className="primary-banner__buttons">
              <Button
                to="#"
                as="link"
                theme="primary"
                scale="l"
                view="outline"
                rounded="pill"
                iconAfter={<SvgIcon iconId="caret-circle-right" />}
              >
                View Intro
              </Button>
              <Button to="#" as="link" theme="primary" scale="l" view="default" rounded="pill">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
