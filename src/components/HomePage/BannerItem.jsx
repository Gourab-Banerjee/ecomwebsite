import React from 'react'
import "./Banner.css"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Banner.css"
const BannerItem = () => {
  return (
    <div className='banner-container'>
 <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    autoplay={true}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/2/5/2560x788_atlas_en-min_1.jpg" alt="" style={{width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/1/_/1_2560x788_en_offcourt-min_1.jpg" alt="" style={{width: "100%"}} />
      </SwiperSlide>
      
      
    </Swiper>

    </div>
  
   
  );
}

export default BannerItem