"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const BookACall = () => {
  return (
    <>
      <div className="book">
        <div className="book__container">
          <div className="book__center">
            <div className="book__text">
              <span>Special Launch Deal:</span> Book a free AI workshop with our founders
            </div>
            <Link href="https://calendly.com/georgegro" target="_blanc" className="book__button">
              <Image src="./calend.svg" width={20} height={20} alt="Book A Call" className="book__img" />
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
