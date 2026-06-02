import { Button } from '@/shared/ui/Button';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import './index.scss';
import type { PropsWithClassName } from '@/shared/types/types';
import clsx from 'clsx';
import type { FC } from 'react';

export const SecondaryBanner: FC<PropsWithClassName> = ({ className }) => {
  return (
    <section className={clsx('secondary-banner', className)}>
      <div className="container">
        <div className="secondary-banner__box">
          <div className="secondary-banner__main">
            <h1 className="secondary-banner__title">
              Adoption <SvgIcon iconId="paw" className="secondary-banner__title-icon" />
              <br /> <span>TWe need help. so do they.</span>
            </h1>
            <p className="secondary-banner__text">
              Adopt a pet and give it a home, <br />
              it will be love you back unconditionally.
            </p>
            <div className="secondary-banner__buttons">
              <Button to="#" as="link" theme="primary" scale="l" view="default" rounded="pill">
                Explore Now
              </Button>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
