import { Button } from '@/shared/ui/Button';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import type { PropsWithClassName } from '@/shared/types/types';
import clsx from 'clsx';
import type { FC } from 'react';
import './index.scss';
import { useViewSizeContext } from '@/shared/lib/viewSizeContext';

export const TertiaryBanner: FC<PropsWithClassName> = ({ className }) => {
  const { viewSize } = useViewSizeContext();

  const buttonsThemeIsPrimary = viewSize === 'sm' || viewSize === 'md';

  return (
    <section className={clsx('tertiary-banner', className)}>
      <div className="container">
        <div className="tertiary-banner__box">
          <div className="tertiary-banner__main">
            <h1 className="tertiary-banner__title">
              One more friend <br /> <span>Thousands more fun!</span>
            </h1>
            <p className="tertiary-banner__text">
              Having a pet means you have more joy, a new friend, a happy person who will always be
              with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className="tertiary-banner__buttons">
              <Button
                to="#"
                as="link"
                theme={buttonsThemeIsPrimary ? 'primary' : 'secondary'}
                scale="l"
                view="outline"
                rounded="pill"
                iconAfter={<SvgIcon iconId="caret-circle-right" />}
              >
                View Intro
              </Button>
              <Button
                to="#"
                as="link"
                theme={buttonsThemeIsPrimary ? 'primary' : 'secondary'}
                scale="l"
                view="default"
                rounded="pill"
              >
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
