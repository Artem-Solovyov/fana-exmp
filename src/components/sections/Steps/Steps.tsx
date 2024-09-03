"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Steps = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="steps">
      <div className="steps__container">
        <h2 className="steps__title">Onboard in just 3 steps with FANA.AI</h2>
        <div className="steps__body">
          <div className="steps__cards">
            <div className="step">
              <Image src="/steps/img01.png" alt="Steps" width={730} height={420} />
              <h4 className="step__title">Train</h4>
              <p className="step__text">Seamlessly teach your AI Agent with your up-to date knowledge base.</p>
            </div>
            <div className="step">
              <Image src="/steps/img02.png" alt="Steps" width={730} height={420} />
              <h4 className="step__title">Deploy</h4>
              <p className="step__text">
                Embed your FANA.AI Agent in your website, customer support or community channels.
              </p>
            </div>
            <div className="step">
              <Image src="/steps/img03.png" alt="Steps" width={730} height={420} />
              <h4 className="step__title">Enhance</h4>
              <p className="step__text">Control all your AI bots on the fly with a dedicated dashboard.</p>
            </div>
          </div>
          <div ref={ref} className="steps__steps">
            <div className={`steps__bg ${inView ? "active" : ""}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
