"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const BookACall = () => {
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    if (isModal) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
      document.documentElement.classList.add("lock");
    } else {
      document.documentElement.classList.remove("lock");
    }

    return () => {
      document.documentElement.classList.remove("lock");
    };
  }, [isModal]);

  return (
    <>
      <div className="book">
        <div className="book__container">
          <div className="book__center">
            <div className="book__text">
              <span>Special Launch Deal:</span> Book a free AI workshop with our founders
            </div>
            <button onClick={() => setIsModal(true)} className="book__button">
              <Image src="./calend.svg" width={20} height={20} alt="Book A Call" className="book__img" />
              Book a call
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal ">
            <div className="modal__container">
              <div className="modal__bg" onClick={() => setIsModal(false)}></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="modal__window"
              >
                <button className="modal__close" onClick={() => setIsModal(false)}>
                  <Image src="/close.svg" width={13} height={13} alt="Close" />
                </button>
                <Image src="/like.svg" width={43} height={63} alt="Icon" priority={true} className="modal__icon" />
                <div className="modal__body">
                  <h2 className="modal__title">Welcome to FANA.AI</h2>
                  <p className="modal__text">
                    We’ll email you shortly.
                    <br />
                    Why not book a demo right away?
                  </p>
                </div>
                <Link href="https://calendly.com/georgegro" target="_blanc" className="hero-button hero-button--small">
                  Book a demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
