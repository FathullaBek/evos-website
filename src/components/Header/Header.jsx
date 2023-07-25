import React from 'react'
import { StyledHeader } from './Header.style'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

export const Header = () => {
  return (
    <StyledHeader>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>

          <div className='infoDiv'>
            <h1>Mazali. Tez. Sifat jihatdan</h1>
            <p>Sevimli muzqaymoq ta'mini tanlang</p>
            <button>Bizning menyu</button>
            <button>APP Evos</button>
          </div>


          <div className='imgDiv'>
          <div className='parent'>
            <div className='div1'><img src="	https://admin.evos.uz/uploads/collage1_0859c4cd9c.png" alt="" /></div>
            <div className='div2'><img src="	https://admin.evos.uz/uploads/collage2_5573572481.png" alt="" /></div>
            <div className='div3'><img src="	https://admin.evos.uz/uploads/collage3_b891ca091a.png" alt="" /></div>
            <div className='div4'><img src="	https://admin.evos.uz/uploads/collage4_17263ab10c.png" alt="" /></div>
          </div>
        </div>

        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </StyledHeader>
  )
}
