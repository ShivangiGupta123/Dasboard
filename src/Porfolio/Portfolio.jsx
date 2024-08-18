import React from 'react'
import { Controller } from 'swiper';
import { Navigation,EffectFlip, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Portfolio = () => {
  return (
    <Swiper
      // spaceBetween={50}
      slidesPerView={4}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}
      </SwiperSlide>
    </Swiper>
  )
}

export default Portfolio
