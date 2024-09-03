"use client";

import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const SliderVertical = ({ slides, revers = false }: any) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}
      direction={"vertical"}
      slidesPerView={"auto"}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: revers,
        pauseOnMouseEnter: true,
      }}
      loop={true}
    >
      {slides.map((slide: any, index: number) => (
        <SwiperSlide key={index}>
          <div className="comment">
            <div className="comment__header">
              <Image src={slide.path} alt={slide.alt} width={88} height={88} />
              <div className="comment__info">
                <div className="comment__name">{slide.name}</div>
                <div className="comment__mail">{slide.mail}</div>
              </div>
            </div>
            <div className="comment__text">
              {slide.text}{" "}
              {slide.svg && (
                <Image src={slide.svg && slide.svg} width={17} height={17} alt="Icon" className="comment__svg" />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
