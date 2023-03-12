
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation} from "swiper";

import img1 from '../assets/Projectimgs/3Dview.bmp'
import img2 from '../assets/Projectimgs/Plan_1.png'
import img3 from '../assets/Projectimgs/Plan_2.bmp'


const Slidercomponent = () => {
  return (
  
    <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay:2000,
                disableOnInteraction:false,
                smooth:true,
            }}
            pagniation={{
                clickable:true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            
            >
                <SwiperSlide>
                    <img
                    className='object-contain w-full h-96'
                    src={img1}
                    alt='img 1'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    className='object-contain w-full h-96'
                    src={img2}
                    alt='img 2'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    className='object-contain w-full h-96'
                    src={img3}
                    alt='img 3'></img>
                </SwiperSlide>
            </Swiper>

  )
}

export default Slidercomponent