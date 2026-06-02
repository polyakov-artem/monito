import type { PropsWithClassName } from '@/shared/types/types';
import clsx from 'clsx';
import type { FC } from 'react';
import { routerPaths } from '@/shared/config/routes';
import { InfiniteCarousel } from '@/shared/ui/InfiniteCarousel';
import './index.scss';
import { ShowcaseLayout } from '@/shared/ui/ShowcaseLayout';

export const Sellers: FC<PropsWithClassName> = ({ className }) => {
  const classes = clsx('sellers', className);
  return (
    <ShowcaseLayout
      className={classes}
      subtitle={'Proud to be part of'}
      title="Pet sellers"
      link={routerPaths.category}
      linkText=" View all our sellers"
      inlineTitle
    >
      <InfiniteCarousel
        className="sellers__carousel"
        speed={60}
        images={[
          '/sellers/1.png',
          '/sellers/2.png',
          '/sellers/3.png',
          '/sellers/4.png',
          '/sellers/5.png',
          '/sellers/6.png',
          '/sellers/7.png',
        ]}
      />
    </ShowcaseLayout>
  );
};
