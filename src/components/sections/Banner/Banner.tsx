import Image from "next/image";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <div className="banner__body">
            <h2 className="banner__title">Explore FANA.AI</h2>
            <h2 className="banner__text">We also create custom AI Agents and bots that cater to your needs. </h2>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/1wdaze2R1xpkvGs341wmiFsQJgu243c8MZht-iy5K_XA/edit"
              className="banner__button"
            >
              Request a custom bot
            </a>
          </div>
          <div className="banner__anim">
            <Image src="/herologo.svg" alt="Logo" width={497} height={345} />
          </div>
        </div>
      </div>
    </section>
  );
};
