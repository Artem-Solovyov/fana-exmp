"use client";
import { useEffect, useState } from "react";
import { subscribeToMailerLite } from "@/services";
import { validateEmail } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [isModal, setIsModal] = useState(false);
  const [isSubscriptionFailed, setIsSubscriptionFailed] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    if (isSubscriptionFailed) {
      setTimeout(() => {
        setIsSubscriptionFailed(false);
      }, 3000);
    }
    if (!isEmailValid) {
      setTimeout(() => {
        setIsEmailValid(true);
      }, 3000);
    }
  }, [isEmailValid, isSubscriptionFailed]);

  const emailHandler = async (e: any) => {
    e.preventDefault();
    const isValid = validateEmail(email as string);

    if (!isValid) {
      setIsEmailValid(false);
    }

    if (isValid) {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsModal(true);
      } else {
        setIsSubscriptionFailed(true);
      }

      setEmail("");
    }
  };

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
      <form className={`form  ${isEmailValid ? "" : "error"} ${isSubscriptionFailed ? "fail" : ""} `}>
        <div className="form__label">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="form__input"
            placeholder="Enter Your Email Address"
          />
        </div>
        <button onClick={(e) => emailHandler(e)} className="form__button hero-button">
          Request free trial
        </button>
      </form>
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
