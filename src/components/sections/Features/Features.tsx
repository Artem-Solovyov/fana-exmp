"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Features = () => {
  const featuresData = [
    {
      img: "/features/img01.png",
      title: "Dashboard analytics",
      text: "Analyze chat data to improve efficiency and inform decision-making.",
    },
    {
      img: "/features/img02.png",
      title: "Content summarising ",
      text: "Summarise lengthy conversations into clear, actionable points.",
    },
    {
      img: "/features/img03.png",
      title: "50+ languages support",
      text: "EU, LATAM and APAC, including dialects and slang, for seamless global communication.",
    },
    {
      img: "/features/img04.png",
      title: "Text-to-speech",
      text: "Convert text to natural speech for easy customer interaction.",
    },
    {
      img: "/features/img05.png",
      title: "Context maintaining",
      text: "A feedback loop that can track and follow long conversation threads.",
    },
    {
      img: "/features/img06.png",
      title: "Image and video processing",
      text: "Capable of creating and communicating through images and videos.",
    },
  ];

  const mouseMove = (e: any) => {
    if (window.innerWidth > 1000) {
      for (const card of document.getElementsByClassName("card") as any) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    }
  };
  return (
    <section className="features">
      <svg
        width="1440"
        height="628"
        viewBox="0 0 1440 628"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="features__svg"
      >
        <g opacity="0.5" filter="url(#filter0_f_1200_7487)">
          <ellipse cx="720" cy="314.071" rx="1133" ry="252" fill="url(#paint0_linear_1200_7487)" />
        </g>
        <defs>
          <filter
            id="filter0_f_1200_7487"
            x="-913"
            y="-437.929"
            width="3266"
            height="1504"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1200_7487" />
          </filter>
          <linearGradient
            id="paint0_linear_1200_7487"
            x1="1853"
            y1="226.84"
            x2="526.532"
            y2="-715.738"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#007A5A" />
            <stop offset="1" stopColor="#07DC9C" />
          </linearGradient>
        </defs>
      </svg>
      <div className="features__container">
        <div className="features__title">Additional features</div>
        <div id="cards" className="cards" onMouseMove={(e) => mouseMove(e)}>
          {featuresData.map((card) => (
            <div className="card" key={card.img}>
              <div className="card__content">
                <div className="card__image">
                  <Image src={card.img} alt={card.title} width={720} height={420} />
                </div>
                <div className="card__info-wrapper">
                  <div className="card__info">
                    <div className="card__info-title">
                      <h3>{card.title}</h3>
                      <h4>{card.text}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="features__text">
          Train your own AI Assistant <br />
          to handle all your support and sales conversations
        </div>
        <a href="https://calendly.com/georgegro" target="_blank" className="hero-button hero-button--long">
          Get a free trial
        </a>
      </div>
    </section>
  );
};
