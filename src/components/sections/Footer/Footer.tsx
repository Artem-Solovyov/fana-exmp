import Image from "next/image";
import headerData from "@/data/header.json";
import { Form } from "@/components/Form/Form";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__column">
            <Image src={"/logo.svg"} alt="Logo" width={109} height={30} />
            <div className="footer__text">
              Supercharge your Support and Sales teams with <span>FANA.AI</span> AI-powered Agents.
            </div>
            <div className="footer__copy">Fana.ai 2024 © All rights reserved</div>
          </div>
          <div className="footer__tab">
            <div className="footer__nav">
              {headerData.map((item) => (
                <a key={item.path} href={item.path} target={item.target ? item.target : ""} className="footer__item">
                  {item.title}
                </a>
              ))}
            </div>
            <div className="footer__socials footer__socials-tab">
              <a href="https://www.linkedin.com/company/fana-ai" target="_blank" className="footer__social">
                <Image src="/in.svg" width={40} height={40} alt="Social Icon" />
              </a>
              <a href="https://twitter.com/fana_ai" target="_blank" className="footer__social">
                <Image src="/x.svg" width={40} height={40} alt="Social Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__actions">
          <div className="footer__actions-title">Get onboard!</div>
          <Form />
          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/fana-ai" target="_blank" className="footer__social">
              <Image src="/in.svg" width={40} height={40} alt="Social Icon" />
            </a>
            <a href="https://twitter.com/fana_ai" target="_blank" className="footer__social">
              <Image src="/x.svg" width={40} height={40} alt="Social Icon" />
            </a>
          </div>
        </div>
        <div className="footer__tab footer__tab-mob">
          <div className="footer__nav">
            {headerData.map((item) => (
              <a key={item.path} href={item.path} target={item.target ? item.target : ""} className="footer__item">
                {item.title}
              </a>
            ))}
          </div>
          <div className="footer__socials footer__socials-tab">
            <a href="https://www.linkedin.com/company/fana-ai" target="_blank" className="footer__social">
              <Image src="/in.svg" width={40} height={40} alt="Social Icon" />
            </a>
            <a href="https://twitter.com/fana_ai" target="_blank" className="footer__social">
              <Image src="/x.svg" width={40} height={40} alt="Social Icon" />
            </a>
          </div>
        </div>
        <div className="footer__copy footer__copy-tab">Fana.ai 2024 © All rights reserved</div>
      </div>
      <svg
        width="1440"
        height="260"
        viewBox="0 0 1440 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer__bg"
      >
        <g filter="url(#filter0_f_1409_567)">
          <ellipse cx="720.5" cy="230" rx="608.5" ry="30" fill="#D9D9D9" fillOpacity="0.5" />
        </g>
        <defs>
          <filter
            id="filter0_f_1409_567"
            x="-88"
            y="0"
            width="1617"
            height="460"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1409_567" />
          </filter>
        </defs>
      </svg>
    </footer>
  );
};
