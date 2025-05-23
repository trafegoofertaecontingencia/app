import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const singleCar = {
  brand: "Nissan",
  model: "kicks",
  km: "56781",
  img: [
    "/cars/used/nissan/kicks/kicks.jpg",
    "/cars/used/nissan/kicks/kicks2.jpg",
    "/cars/used/nissan/kicks/kicks3.jpg",
  ],
};

export default function Car() {
  return (
    <Swiper>
      <SwiperSlide>
        {singleCar.img.map((path) => (
          <div className="">
            <img src={path} alt="" />
          </div>
        ))}
      </SwiperSlide>
    </Swiper>
  );
}
