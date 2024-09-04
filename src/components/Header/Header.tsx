"use client";

import Link from "next/link";
import Image from "next/image";
import headerData from "../../data/header.json";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Form } from "../Form/Form";

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    if (isMenu) {
      document.documentElement.classList.add("lock");
    } else {
      document.documentElement.classList.remove("lock");
    }

    return () => {
      document.documentElement.classList.remove("lock");
    };
  }, [isMenu]);

  return (
    <>
      <div className="header">
        <div className="header__container">
          <Image src="./logo.svg" width={130} height={30} alt="Logo" />
          <nav className="header__nav">
            {headerData.map((item) => (
              <Link key={item.title} href={item.path} target={item.target ? item.target : ""} className="header__link">
                {item.title}
              </Link>
            ))}
          </nav>
          <button onClick={() => setIsMenu(true)} className="header__menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ ease: "linear", duration: 0.2 }}
            className="menu"
          >
            <div className="menu__container">
              <div className="menu__header">
                <Image src="./logo.svg" width={130} height={30} alt="Logo" />
                <Image src="./closewhite.svg" width={18} height={18} alt="Logo" onClick={() => setIsMenu(false)} />
              </div>
              <div className="menu__body">
                <nav className="menu__nav">
                  {headerData.map((item) => (
                    <Link
                      key={item.title}
                      href={item.path}
                      target={item.target ? item.target : ""}
                      className="menu__item"
                      onClick={() => setIsMenu(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <Form />
              </div>
              <div className="menu__socials">
                <Link
                  onClick={() => setIsMenu(false)}
                  href="https://www.linkedin.com/company/fana-ai"
                  target="_blank"
                  className="menu__social"
                >
                  <Image src="./in.svg" width={40} height={40} alt="Icon" />
                </Link>
                <Link
                  onClick={() => setIsMenu(false)}
                  href="https://twitter.com/fana_ai"
                  target="_blank"
                  className="menu__social"
                >
                  <Image src="./x.svg" width={40} height={40} alt="Icon" />
                </Link>
              </div>

              <div className="menu__footer">Fana.ai 2024 © All rights reserved</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
