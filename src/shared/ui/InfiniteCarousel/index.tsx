import { useMemo } from 'react';
import './index.scss';
import clsx from 'clsx';

type InfiniteCarouselProps = {
  images: string[];
  speed?: number;
  gap?: number;
  itemWidth?: number;
  itemHeight?: number;
  className?: string;
};

export const InfiniteCarousel = ({
  images,
  speed = 25,
  gap = 20,
  itemWidth = 151,
  itemHeight = 112,
  className,
}: InfiniteCarouselProps) => {
  const duplicated = [...images, ...images];

  const styles = useMemo(
    () => ({
      '--inf-carousel-padding': gap / 2 + 'px',
      '--inf-carousel-item-width': itemWidth + 'px',
      '--inf-carousel-item-height': itemHeight + 'px',
      '--inf-carousel-duration': speed + 's',
    }),
    [gap, itemWidth, itemHeight, speed]
  );

  const classes = clsx('infinite-carousel', className);

  return (
    <div className={classes}>
      <div className="infinite-carousel__track" style={styles}>
        {duplicated.map((logo, index) => (
          <div className="infinite-carousel__item" key={index}>
            <img src={logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
