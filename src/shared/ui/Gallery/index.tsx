import clsx from 'clsx';
import { useRef, useState, type FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './index.scss';
import { SliderBtn } from './SliderBtn';

type GalleryProps = {
  images: string[];
  className?: string;
};

export const Gallery: FC<GalleryProps> = ({ className, images }) => {
  const classes = clsx('gallery', className);

  const mainSwiperRef = useRef<SwiperType | null>(null);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const [navState, setNavState] = useState({
    isBeginning: true,
    isEnd: images.length <= 1,
  });

  const updateNavState = (swiper: SwiperType) => {
    setNavState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  const handlePrev = () => {
    mainSwiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    mainSwiperRef.current?.slideNext();
  };

  const renderSlides = (prefix: 'main' | 'thumb') =>
    images.map((image, index) => (
      <SwiperSlide className={`gallery__${prefix}-slide`} key={`${prefix}-${image}-${index}`}>
        <img className="gallery__img" src={image} alt="" />
      </SwiperSlide>
    ));

  return (
    <div className={classes}>
      <div className="gallery__main-wrapper">
        <SliderBtn
          className="gallery__prev-btn"
          icon="prev"
          disabled={navState.isBeginning}
          onClick={handlePrev}
        />
        <SliderBtn
          className="gallery__next-btn"
          icon="next"
          disabled={navState.isEnd}
          onClick={handleNext}
        />

        <Swiper
          onSwiper={swiper => {
            mainSwiperRef.current = swiper;
            updateNavState(swiper);
          }}
          onSlideChange={updateNavState}
          spaceBetween={10}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            slideThumbActiveClass: 'gallery__thumb-slide_active',
          }}
          modules={[FreeMode, Thumbs]}
          className="gallery__main-slider"
        >
          {renderSlides('main')}
        </Swiper>
      </div>

      <div className="gallery__thumbs-wrapper">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView="auto"
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          className="gallery__thumbs-slider"
        >
          {renderSlides('thumb')}
        </Swiper>
      </div>
    </div>
  );
};
