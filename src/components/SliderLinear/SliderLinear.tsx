"use client";

import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const SliderLinear = ({ slides, revers = false }: any) => {
  return (
    <div className="slider-linear">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={100}
        slidesPerView={"auto"}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: revers,
        }}
        loop={true}
        allowTouchMove={false}
        breakpoints={{
          320: {
            spaceBetween: 20,
          },
          800: {
            spaceBetween: 100,
          },
        }}
      >
        {slides.map((slide: any, index: number) => (
          <SwiperSlide key={index}>
            <Image src={slide.path} alt={slide.alt} width={slide.width} height={slide.height} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
