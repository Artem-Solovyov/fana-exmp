"use client";
import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import assistantData from "@/data/asisstant_steps.json";

export const Assistant: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const swiperRef = useRef<SwiperCore>();

  const handleMouseEnter = (index: number) => {
    swiperRef.current?.slideTo(index);
  };
  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;

    swiperRef.current.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  }, []);

  return (
    <div className="assistant">
      <div className="assistant__container">
        <h2 className="assistant__title">Your ultimate AI Chatbot Assistant</h2>
        <p className="assistant__text">Finally one tool your Success and Sales teams will love to use.</p>
        <div className="assistant__blocks">
          <div className={`assistant__prev-arrow ${currentStep === 1 && "disabled"}`} onClick={handlePrev}>
            <Image src="./arrow.svg" width={8} height={12} alt="Arrow" />
          </div>
          <div className={`assistant__next-arrow ${currentStep === 3 && "disabled"}`} onClick={handleNext}>
            <Image src="./arrow.svg" width={8} height={12} alt="Arrow" />
          </div>
          <div className="assistant__block assistant__block-1">
            <div className="assistant__steps">
              {assistantData.map((step, index) => (
                <div
                  key={step.id}
                  className={`assistant__step ${currentStep === step.id ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <div className="assistant__info">
                    0{step.id}
                    <div className="assistant__progress">
                      <div className={`assistant__progress-line ${currentStep === step.id ? "active" : ""}`}></div>
                    </div>
                  </div>
                  <div className="assistant__step-title">{step.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="assistant__block">
            <Swiper
              modules={[Autoplay, EffectFade]}
              spaceBetween={50}
              slidesPerView={1}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              onSlideChange={(swiper) => setCurrentStep(swiper.activeIndex + 1)}
              autoplay={{ delay: 5000 }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {assistantData.map((step) => (
                <SwiperSlide key={step.id}>
                  <div className="assistant__slide">
                    <div key={step.id} className={`assistant__step ${currentStep === step.id ? "active" : ""}`}>
                      <div className="assistant__info">
                        0{step.id}
                        <div className="assistant__progress">
                          <div className={`assistant__progress-line ${currentStep === step.id ? "active" : ""}`}></div>
                        </div>
                      </div>
                      <div className="assistant__step-title">{step.title}</div>
                    </div>
                    <Image src={step.image} alt={step.title} width={920} height={1200} priority={true} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
