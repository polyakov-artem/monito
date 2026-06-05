import clsx from 'clsx';
import type { FC } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.scss';

type SliderProps = {
  images: string[];
  className?: string;
};

export const Slider: FC<SliderProps> = ({ images, className }) => {
  const classes = clsx('slider', className);

  return (
    <div className={classes}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={12}
        pagination={{
          clickable: true,
          el: '.slider__pagination',
          bulletClass: 'slider__bullet',
          bulletActiveClass: 'slider__bullet_active',
        }}
        modules={[Pagination]}
        className="slider__swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide className="slider__slide" key={image + index}>
            <img className="slider__img" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider__pagination" />
    </div>
  );
};
