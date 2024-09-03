import { Accordion } from "./Accordion/Accordion";

export const Faq = () => {
  return (
    <section id="faq" className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Frequently asked questions</h2>
        <div className="faq__content">
          <Accordion />
        </div>
      </div>
    </section>
  );
};
