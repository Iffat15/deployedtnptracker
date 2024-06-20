import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Coordinators.css';
import Alumni from '../alumnicard'
// import required modules
import { Pagination } from 'swiper/modules';
import image from '../../Assets/edusity_assets/user-3.png'
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'3'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="Swiper-Coordinators"
      >
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        />
        </SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
        <SwiperSlide className='Coordinator'><Alumni
          imageSrc={image}
          name="Natalie Paisley"
          jobTitle="CEO / Co-Founder"
          email="example@example.com"
          phone="+1 234 567 890"
          facebookLink="#facebook"
          twitterLink="#twitter"
          instagramLink="#instagram"
        /></SwiperSlide>
      </Swiper>
    </>
  );
}
