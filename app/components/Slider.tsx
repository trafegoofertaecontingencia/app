"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import "swiper/css";

import { Autoplay } from "swiper/modules";

export default function Slider() {
  const banners = ["/banners/banner1.jpg", "/banners/banner2.jpg"];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {banners.map((path, index) => (
        <SwiperSlide key={index}>
          <div>
            <Slide path={`${path}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
