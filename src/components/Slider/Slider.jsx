import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../img/Logo.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = ({ movies }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  console.log(movies);
  return (
    <div className="Sliders_item">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>item1</SwiperSlide>
        <SwiperSlide>item2</SwiperSlide>
        <SwiperSlide>item3</SwiperSlide>
        <SwiperSlide>item4</SwiperSlide>
        <SwiperSlide>item5</SwiperSlide>
        <SwiperSlide>item6</SwiperSlide>
        <SwiperSlide>item7</SwiperSlide>
  
      </Swiper>
    </div>
  );
};

export default Slider;
