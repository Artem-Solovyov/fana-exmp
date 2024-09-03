import Image from "next/image";

export const Case = () => {
  return (
    <section id="use-cases" className="case">
      <div className="case__container">
        <h2 className="case__title">Case studies</h2>
        <div className="case__content">
          <div className="case__blocks">
            <div className="case__block">
              <Image src="/finary.svg" width={170} height={25} alt="Logo" />
              <p className="case__text">
                A leading SaaS financial trading provider with $20B+ in transactions was looking to streamline a large
                volume of customer support requests during onboarding.
                <br />
                <br />
                Finery Markets wanted something easy to use and working in Telegram. We trained and built a bot that
                works
                <span> 24/7</span> handling all FAQs flawlessly.
              </p>
            </div>
            <div className="case__block ">
              <div className="case__block-flex">
                <div className="case__item">
                  <span className="case__item-title">20-40h</span>
                  <div className="case__item-text">Time saved handling support tickets (per customer)</div>
                </div>
                <div className="case__item">
                  <span className="case__item-title case__item-title--black">95%</span>
                  <div className="case__item-text">More accurate replies and faster resolutions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="case__img">
            <Image src="/case.jpg" width={3220} height={1600} alt="Case" />
          </div>
        </div>
      </div>
    </section>
  );
};
