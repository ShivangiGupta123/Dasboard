import React from 'react'
import { Navigation, EffectFlip, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Apple } from 'iconsax-react';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <Swiper
      slidesPerView={4}
      grabCursor={true}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
    >
      <SwiperSlide>
        <PortfolioCard
          icon={<Apple size="32" color="#FF8A65" />}
          title="Apple"
          totalShare="3000"
          profit={"9.00"}
          inProfit={true}
        />

      </SwiperSlide>
      <SwiperSlide>
        <PortfolioCard
          icon={<Apple size="32" color="#FF8A65" />}
          title="Apple"
          totalShare="3000"
          profit={"9.00"}
          inProfit={false}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioCard
          icon={<Apple size="32" color="#FF8A65" />}
          title="Apple"
          totalShare="3000"
          profit={"9.00"}
          inProfit={false}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioCard
          icon={<Apple size="32" color="#FF8A65" />}
          title="Apple"
          totalShare="3000"
          profit={"9.00"}
          inProfit={false}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioCard
          icon={<Apple size="32" color="#FF8A65" />}
          title="Apple"
          totalShare="3000"
          profit={"9.00"}
          inProfit={false}
        />
      </SwiperSlide>
      <SwiperSlide>
        <PortfolioCard
          icon={<Apple size="32" color="#FF8A65" />}
          title="Apple"
          totalShare="3000"
          profit={"9.00"}
          inProfit={false}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Portfolio
