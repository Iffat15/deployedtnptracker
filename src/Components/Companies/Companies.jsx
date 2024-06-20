// import React from 'react'
// import './programs.css'
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// // import {Navigation,Pagination,EffectCoverflow} from 'swiper'
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import program_1 from '../../Assets/barclays.jpg'
import program_2 from '../../Assets/edusity_assets/progran-2-1.jpg'
import program_3 from '../../Assets/edusity_assets/program-3-1.avif'
// import program_icon_1 from '../../Assets/edusity_assets/program-icon-1.png'
// import program_icon_2 from '../../Assets/edusity_assets/program-icon-2.png'
// import program_icon_3 from '../../Assets/edusity_assets/program-icon-3.png'
import CompCard from '../CompCard/CompCard'
// const programs = () => {
//   return (
//     <div className='container'>
//       {/* <div className="program">
//         <img src={program_1} alt="" />
//         <div className="caption">
//             <img src={program_icon_1} alt="" />
//             <h2>30 lpa</h2>
//             <p>20+ offers</p>
//         </div>
//       </div>
//       <div className="program">
//         <img src={program_2} alt="" />
//         <div className="caption">
//             <img src={program_icon_2} alt="" />
//             <h2>20 lpa</h2>
//             <p>60+ offers</p>
//         </div>
//       </div>
//       <div className="program">
//         <img src={program_3} alt="" />
//         <div className="caption">
//             <img src={program_icon_3} alt="" />
//             <h2>35 lpa</h2>
//             <p>50+ offers</p>
//         </div>
//       </div>
//       <div className="program">
//         <img src={program_1} alt="" />
//         <div className="caption">
//             <img src={program_icon_1} alt="" />
//             <h2>30 lpa</h2>
//             <p>20+ offers</p>
//         </div>
//       </div>
//       <div className="program">
//         <img src={program_2} alt="" />
//         <div className="caption">
//             <img src={program_icon_2} alt="" />
//             <h2>20 lpa</h2>
//             <p>60+ offers</p>
//         </div>
//       </div>
//       <div className="program">
//         <img src={program_3} alt="" />
//         <div className="caption">
//             <img src={program_icon_3} alt="" />
//             <h2>35 lpa</h2>
//             <p>50+ offers</p>
//         </div>
//       </div> */}
//       <Swiper 
//       effect={'coverflow'}
//       grabCursor={true}
//       centeredSlides={true}
//       loop={true}
//       slidesPreview={'auto'}
//       coverflowEffect={{
//         rotate:0,
//         stretch:0,
//         depth:100,
//         modifier:2.5,
//       }}
//       pagination={{el:'',clickable:true}}
//       navigation={{
//         nextEl:'swiper-button-next',
//         prevEl:'swiper-button-prev',
//         clickable:true

//       }}
//       modules={[EffectCoverflow,Pagination,Navigation]}
//       className='swiper_container'
//       >
//         <SwiperSlide>
//           <CompCard imgSrc={program_1}
//             imgAlt="img-comp"
//             title="Company Name"
//             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
//             buttonText="Learn More"
//             link="CardPage"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CompCard imgSrc={program_2}
//             imgAlt="img-comp"
//             title="Company Name"
//             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
//             buttonText="Learn More"
//             link="CardPage"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <CompCard imgSrc={program_3}
//             imgAlt="img-comp"
//             title="Company Name"
//             description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
//             buttonText="Learn More"
//             link="CardPage"
//           />
//         </SwiperSlide>
//         <div className="slide-controller">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination">

//           </div>
//         </div>
//       </Swiper>
//     </div>
//   )
// }

// export default programs
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Companies.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='mySwiper-slide'>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
          <CompCard imgSrc={program_1}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_2}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_3}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_3}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_2}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_1}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_3}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_2}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
        <SwiperSlide className='mySwiper-slide'>
        <CompCard imgSrc={program_1}
            imgAlt="img-comp"
            title="Company Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi!"
            buttonText="Learn More"
            link="CardPage"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
