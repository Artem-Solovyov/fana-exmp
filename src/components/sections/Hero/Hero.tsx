import { Form } from "@/components/Form/Form";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__bg">
        <Image alt="Bg" src="/herobg.png" width={2000} height={1800} className="" />
      </div>
      <div className="hero__container">
        <div className="hero__body">
          <div className="hero__header">
            <h1 className="hero__title">
              Onboard new users
              <br /> with
              <span> AI </span>
              <Image alt="Star" src="./star.svg" width={48} height={48} className="hero__star" />
            </h1>
            <p className="hero__text">
              Supercharge your Support and Sales teams with <span>FANA.AI</span> AI-powered Agents.
            </p>
          </div>
          <Form />
          <ul className="hero__list">
            <li className="hero__item">
              <Image alt="Icon" src="./ok.svg" width={18} height={18} />
              Handle any questions with our custom-trained bots.
            </li>
            <li className="hero__item">
              <Image alt="Icon" src="./ok.svg" width={18} height={18} />
              Outreach prospects with our Sales Assistants and increase your conversion by +60%.
            </li>
            <li className="hero__item">
              <Image alt="Icon" src="./ok.svg" width={18} height={18} />
              Level-up your Customer Success with our multi-platform automations.
            </li>
          </ul>
        </div>
        <div className="hero__animation">
          <Image alt="Video" src="./heroanimation.svg" width={540} height={540} priority={true} />
        </div>
      </div>
    </div>
  );
};
