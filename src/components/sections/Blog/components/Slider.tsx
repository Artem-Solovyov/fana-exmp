"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider({ posts }: any) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="blog__slider"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
        }}
      >
        {posts?.map((post: any) => (
          <SwiperSlide key={post.id}>
            <div className="slide">
              <div className="slide__content">
                <div className="slide__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
                <div
                  className="slide__text"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace(/\s*\[&hellip;\]/g, "...") }}
                ></div>
                <a target="_blank" href={post.link} className="slide__more">
                  <span>Read more</span>
                  <Image src="/arrow-right.svg" height={6} width={25} alt="Arrow" />
                </a>
              </div>
              <div className="slide__img">
                <Image src={post.yoast_head_json.og_image[0]?.url} width={564} height={420} alt="Image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
