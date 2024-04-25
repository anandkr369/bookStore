import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css';
// import required modules
import { EffectCards } from 'swiper/modules';

import book01 from "../assets/BannerCard/book1.jpg"
import book02 from "../assets/BannerCard/book2.jpg"
import book03 from "../assets/BannerCard/book3.jpg"
import book04 from "../assets/BannerCard/book4.jpg"
import book05 from "../assets/BannerCard/book5.jpg"
import book06 from "../assets/BannerCard/book6.jpg"
import book07 from "../assets/BannerCard/book7.jpg"
import book08 from "../assets/BannerCard/book8.jpg"
const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={book01} /></SwiperSlide>
        <SwiperSlide><img src={book02} /></SwiperSlide>
        <SwiperSlide><img src={book03} /></SwiperSlide>
        <SwiperSlide><img src={book04} /></SwiperSlide>
        <SwiperSlide><img src={book05} /></SwiperSlide>
        <SwiperSlide><img src={book06} /></SwiperSlide>
        <SwiperSlide><img src={book07} /></SwiperSlide>
        <SwiperSlide><img src={book08} /></SwiperSlide>
        <SwiperSlide><img src={book05} /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard