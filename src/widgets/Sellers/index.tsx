import type { PropsWithClassName } from '@/shared/types/types';
import clsx from 'clsx';
import type { FC } from 'react';
import { routerPaths } from '@/shared/config/routes';
import { InfiniteCarousel } from '@/shared/ui/InfiniteCarousel';
import { ShowcaseLayout } from '@/shared/ui/ShowcaseLayout';
import './index.scss';

const publicUrl = import.meta.env.VITE_PUBLIC_PATH;

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
          `${publicUrl}sellers/1.png`,
          `${publicUrl}sellers/2.png`,
          `${publicUrl}sellers/3.png`,
          `${publicUrl}sellers/4.png`,
          `${publicUrl}sellers/5.png`,
          `${publicUrl}sellers/6.png`,
          `${publicUrl}sellers/7.png`,
        ]}
      />
    </ShowcaseLayout>
  );
};
