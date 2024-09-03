"use client";
import { useEffect, useState } from "react";
import { subscribeToMailerLite } from "@/services";
import { validateEmail } from "@/utils";

export const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubscriptionSuccessful, setIsSubscriptionSuccessful] = useState(false);
  const [isSubscriptionFailed, setIsSubscriptionFailed] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    if (isSubscriptionSuccessful) {
      setTimeout(() => {
        setIsSubscriptionSuccessful(false);
      }, 3000);
    }

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
  }, [isSubscriptionSuccessful, isEmailValid, isSubscriptionFailed]);

  const emailHandler = async (e: any) => {
    e.preventDefault();
    const isValid = validateEmail(email as string);

    if (!isValid) {
      setIsEmailValid(false);
    }

    if (isValid) {
      const result = await subscribeToMailerLite(email as string);
      if (result.success) {
        setIsSubscriptionSuccessful(true);
      } else {
        setIsSubscriptionFailed(true);
      }

      setEmail("");
    }
  };

  return (
    <form
      className={`form  ${isEmailValid ? "" : "error"} ${isSubscriptionFailed ? "fail" : ""} ${
        isSubscriptionSuccessful ? "success" : ""
      }`}
    >
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
  );
};
