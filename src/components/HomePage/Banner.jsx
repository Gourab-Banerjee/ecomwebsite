import React from 'react'
import "./Banner.css"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <div className='banner-container'>
 <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    
    navigation
    pagination={{ clickable: true }}
    scautoplay={true}rollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide>
        <img src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/b/r/bright_friday_2560x788_en-min.jpg" alt="" style={{width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/3/_/3_2560x788-min_en_lined.jpg" alt="" style={{width: "100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/1/0/10_2560x788_cozzzy_en-min.jpg" alt="" style={{width: "100%"}} />
      </SwiperSlide>
      <SwiperSlide><img src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/5/_/5_2560x788_en_metallic-min.jpg" alt="" style={{width: "100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/1/_/1_2560x788-min_dylan_en.jpg" alt="" style={{width: "100%"}}/>
      </SwiperSlide>
      
    </Swiper>

    </div>
  
   
  );
}

export default Banner