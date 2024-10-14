import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '@assets/slider-picture-1.png'
import slide2 from '@assets/slider-picture-2.png'
import slide3 from '@assets/slider-picture-3.png'
import slide4 from '@assets/slider-picture-4.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import '../GamesSlider/GamesSlider.scss'

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { relative } from 'path';

const GameSlider: React.FC = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div style={{position: 'relative', maxWidth: '750px'}}>
    <Swiper
        spaceBetween={10}
        pagination={{
          type: 'progressbar',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs,
          
      Pagination
    ]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        pagination={{
          el: '.swiper-pagination',
          type: 'progressbar',
          enabled: false,
          lockClass: "lala"
        }}
        modules={[FreeMode, Thumbs, Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default GameSlider;
