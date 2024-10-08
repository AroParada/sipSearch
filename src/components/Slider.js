import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Mousewheel, FreeMode, Pagination } from "swiper/modules";

import margarita from "../assets/margarita.jpg";
import martini from "../assets/martini.jpg";
import mojito from "../assets/mojito.jpg";
import oldFashion from "../assets/oldfashion.jpg";
import watermelonMarg from "../assets/watermelon margarita.jpg";
import whiskeySour from "../assets/whiskey sour.jpg";

export default function Slider() {
  return (
    <>
      <Swiper
        direction="horizontal"
        slidesPerView={2}
        spaceBetween={30}
        mousewheel={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Mousewheel, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ borderRadius: "5px" }} alt="drink" src={oldFashion} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ borderRadius: "5px" }} alt="drink" src={mojito} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ borderRadius: "5px" }} alt="drink" src={margarita} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ borderRadius: "5px" }} alt="drink" src={martini} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{borderRadius: "5px"}} alt="drink" src={watermelonMarg} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{borderRadius: "5px"}} alt="drink" src={whiskeySour} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
