"use client";

import { SliderVertical } from "@/components/SliderVertical/SliderVertical";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Comments = () => {
  const fullSliderData = [
    {
      path: "/comments/01.jpg",
      alt: "Avatar",
      name: "Raffaele Orefice",
      mail: "@raffaeleorefice",
      text: "Worked on our website like a charm! And the community loved it ",
      svg: "/comments/like.png",
    },
    {
      path: "/comments/02.jpg",
      alt: "Avatar",
      name: "Derek E. Silva",
      mail: "@DerekSilva",
      text: "Our dev community really needed an assistant in Telegram and Discord!Top ",
      svg: "/comments/good.png",
    },
    {
      path: "/comments/03.jpg",
      alt: "Avatar",
      name: "Aleksejs Bespalovs",
      mail: "@aleksejs_bespalovs",
      text: "Excellent service! It really helped us handling those large amounts of FAQs. @fana_ai top!",
    },
    {
      path: "/comments/04.jpg",
      alt: "Avatar",
      name: "Mintventures_xyz",
      mail: "@MintventuresX",
      text: "@fana_ai, Faster resolutions, happier clients — game-changer for us!",
    },
    {
      path: "/comments/05.jpg",
      alt: "Avatar",
      name: "Kristian Jaakkola, M.Sc., EMBA",
      mail: "@kjaakkol",
      text: "Works 100%! Improved a lot our support team effciency. @fana_ai",
    },
    {
      path: "/comments/06.jpg",
      alt: "Avatar",
      name: "Egor Morozow",
      mail: "@gregg_m",
      text: "@fana_ai Literaly saved our lives when handling new clents. ",
    },
    {
      path: "/comments/07.jpg",
      alt: "Avatar",
      name: "Epp Roberta",
      mail: "@eaRoberta",
      text: "Super convenient when we wanted to schedule calls with our clients. Thank you! @fana_ai",
      svg: "/comments/hard.png",
    },
    {
      path: "/comments/08.jpg",
      alt: "Avatar",
      name: "Sergey Klinkov",
      mail: "@sergey_klinkov",
      text: "Real help! Helped a lot in our sales, especially with the cold leads!",
    },
    {
      path: "/comments/09.jpg",
      alt: "Avatar",
      name: "Kojump",
      mail: "@kojumpjumpingclub",
      text: "@fana_ai is amazing! Boosted our support productivity with 50%!",
    },
    {
      path: "/comments/10.jpg",
      alt: "Avatar",
      name: "Plank Pushers",
      mail: "@PlayPushGo",
      text: "Our Telegram game community really needed that! @fana_ai",
    },
    {
      path: "/comments/11.jpg",
      alt: "Avatar",
      name: "Ivy Miller",
      mail: "@IvyMiller",
      text: "Excellent service! The accuracy of the repliers is amazing. @fana_ai",
    },
    {
      path: "/comments/12.jpg",
      alt: "Avatar",
      name: "Jan Zajfer",
      mail: "@janzajfert",
      text: "Great tool! I use @fana_ai to organise my sales emails and the bot created drafts right away. This, way no lead was missed!",
    },
    {
      path: "/comments/13.jpg",
      alt: "Avatar",
      name: "Gloria Allenkin",
      mail: "@GregoryAllen",
      text: "@fana_ai stands out for one simple reason: Precision. Every feature feels like it's been crafted with care. Amazing job!",
    },
    {
      path: "/comments/14.jpg",
      alt: "Avatar",
      name: "Aimagine",
      mail: "@AimagineNFT",
      text: "Awesome bot - Helped so much on what actually our community wants. ",
    },
    {
      path: "/comments/15.jpg",
      alt: "Avatar",
      name: "Diana Gravo",
      mail: "@DanaGray",
      text: "Superb help at our Discord server!",
    },
  ];
  const fisrtSliderTabletData = [
    {
      path: "/comments/01.jpg",
      alt: "Avatar",
      name: "Raffaele Orefice",
      mail: "@raffaeleorefice",
      text: "Worked on our website like a charm! And the community loved it ",
      svg: "/comments/like.png",
    },
    {
      path: "/comments/02.jpg",
      alt: "Avatar",
      name: "Derek E. Silva",
      mail: "@DerekSilva",
      text: "Our dev community really needed an assistant in Telegram and Discord!Top ",
      svg: "/comments/good.png",
    },
    {
      path: "/comments/03.jpg",
      alt: "Avatar",
      name: "Aleksejs Bespalovs",
      mail: "@aleksejs_bespalovs",
      text: "Excellent service! It really helped us handling those large amounts of FAQs. @fana_ai top!",
    },
    {
      path: "/comments/04.jpg",
      alt: "Avatar",
      name: "Mintventures_xyz",
      mail: "@MintventuresX",
      text: "@fana_ai, Faster resolutions, happier clients — game-changer for us!",
    },
    {
      path: "/comments/05.jpg",
      alt: "Avatar",
      name: "Kristian Jaakkola, M.Sc., EMBA",
      mail: "@kjaakkol",
      text: "Works 100%! Improved a lot our support team effciency. @fana_ai",
    },
    {
      path: "/comments/06.jpg",
      alt: "Avatar",
      name: "Egor Morozow",
      mail: "@gregg_m",
      text: "@fana_ai Literaly saved our lives when handling new clents. ",
    },
    {
      path: "/comments/07.jpg",
      alt: "Avatar",
      name: "Epp Roberta",
      mail: "@eaRoberta",
      text: "Super convenient when we wanted to schedule calls with our clients. Thank you! @fana_ai",
      svg: "/comments/hard.png",
    },
    {
      path: "/comments/08.jpg",
      alt: "Avatar",
      name: "Sergey Klinkov",
      mail: "@sergey_klinkov",
      text: "Real help! Helped a lot in our sales, especially with the cold leads!",
    },
  ];
  const secondSliderTabletData = [
    {
      path: "/comments/09.jpg",
      alt: "Avatar",
      name: "Kojump",
      mail: "@kojumpjumpingclub",
      text: "@fana_ai is amazing! Boosted our support productivity with 50%!",
    },
    {
      path: "/comments/10.jpg",
      alt: "Avatar",
      name: "Plank Pushers",
      mail: "@PlayPushGo",
      text: "Our Telegram game community really needed that! @fana_ai",
    },
    {
      path: "/comments/11.jpg",
      alt: "Avatar",
      name: "Ivy Miller",
      mail: "@IvyMiller",
      text: "Excellent service! The accuracy of the repliers is amazing. @fana_ai",
    },
    {
      path: "/comments/12.jpg",
      alt: "Avatar",
      name: "Jan Zajfer",
      mail: "@janzajfert",
      text: "Great tool! I use @fana_ai to organise my sales emails and the bot created drafts right away. This, way no lead was missed!",
    },
    {
      path: "/comments/13.jpg",
      alt: "Avatar",
      name: "Gloria Allenkin",
      mail: "@GregoryAllen",
      text: "@fana_ai stands out for one simple reason: Precision. Every feature feels like it's been crafted with care. Amazing job!",
    },
    {
      path: "/comments/14.jpg",
      alt: "Avatar",
      name: "Aimagine",
      mail: "@AimagineNFT",
      text: "Awesome bot - Helped so much on what actually our community wants. ",
    },
    {
      path: "/comments/15.jpg",
      alt: "Avatar",
      name: "Diana Gravo",
      mail: "@DanaGray",
      text: "Superb help at our Discord server!",
    },
  ];
  const firstSliderData = [
    {
      path: "/comments/01.jpg",
      alt: "Avatar",
      name: "Raffaele Orefice",
      mail: "@raffaeleorefice",
      text: "Worked on our website like a charm! And the community loved it ",
      svg: "/comments/like.png",
    },
    {
      path: "/comments/02.jpg",
      alt: "Avatar",
      name: "Derek E. Silva",
      mail: "@DerekSilva",
      text: "Our dev community really needed an assistant in Telegram and Discord!Top ",
      svg: "/comments/good.png",
    },
    {
      path: "/comments/03.jpg",
      alt: "Avatar",
      name: "Aleksejs Bespalovs",
      mail: "@aleksejs_bespalovs",
      text: "Excellent service! It really helped us handling those large amounts of FAQs. @fana_ai top!",
    },
    {
      path: "/comments/04.jpg",
      alt: "Avatar",
      name: "Mintventures_xyz",
      mail: "@MintventuresX",
      text: "@fana_ai, Faster resolutions, happier clients — game-changer for us!",
    },
    {
      path: "/comments/05.jpg",
      alt: "Avatar",
      name: "Kristian Jaakkola, M.Sc., EMBA",
      mail: "@kjaakkol",
      text: "Works 100%! Improved a lot our support team effciency. @fana_ai",
    },
    {
      path: "/comments/01.jpg",
      alt: "Avatar",
      name: "Raffaele Orefice",
      mail: "@raffaeleorefice",
      text: "Worked on our website like a charm! And the community loved it ",
      svg: "/comments/like.png",
    },
    {
      path: "/comments/02.jpg",
      alt: "Avatar",
      name: "Derek E. Silva",
      mail: "@DerekSilva",
      text: "Our dev community really needed an assistant in Telegram and Discord!Top ",
      svg: "/comments/good.png",
    },
    {
      path: "/comments/03.jpg",
      alt: "Avatar",
      name: "Aleksejs Bespalovs",
      mail: "@aleksejs_bespalovs",
      text: "Excellent service! It really helped us handling those large amounts of FAQs. @fana_ai top!",
    },
    {
      path: "/comments/04.jpg",
      alt: "Avatar",
      name: "Mintventures_xyz",
      mail: "@MintventuresX",
      text: "@fana_ai, Faster resolutions, happier clients — game-changer for us!",
    },
    {
      path: "/comments/05.jpg",
      alt: "Avatar",
      name: "Kristian Jaakkola, M.Sc., EMBA",
      mail: "@kjaakkol",
      text: "Works 100%! Improved a lot our support team effciency. @fana_ai",
    },
  ];
  const secondSliderData = [
    {
      path: "/comments/06.jpg",
      alt: "Avatar",
      name: "Egor Morozow",
      mail: "@gregg_m",
      text: "@fana_ai Literaly saved our lives when handling new clents. ",
    },
    {
      path: "/comments/07.jpg",
      alt: "Avatar",
      name: "Epp Roberta",
      mail: "@eaRoberta",
      text: "Super convenient when we wanted to schedule calls with our clients. Thank you! @fana_ai",
      svg: "/comments/hard.png",
    },
    {
      path: "/comments/08.jpg",
      alt: "Avatar",
      name: "Sergey Klinkov",
      mail: "@sergey_klinkov",
      text: "Real help! Helped a lot in our sales, especially with the cold leads!",
    },
    {
      path: "/comments/09.jpg",
      alt: "Avatar",
      name: "Kojump",
      mail: "@kojumpjumpingclub",
      text: "@fana_ai is amazing! Boosted our support productivity with 50%!",
    },
    {
      path: "/comments/10.jpg",
      alt: "Avatar",
      name: "Plank Pushers",
      mail: "@PlayPushGo",
      text: "Our Telegram game community really needed that! @fana_ai",
    },
    {
      path: "/comments/06.jpg",
      alt: "Avatar",
      name: "Egor Morozow",
      mail: "@gregg_m",
      text: "@fana_ai Literaly saved our lives when handling new clents. ",
    },
    {
      path: "/comments/07.jpg",
      alt: "Avatar",
      name: "Epp Roberta",
      mail: "@eaRoberta",
      text: "Super convenient when we wanted to schedule calls with our clients. Thank you! @fana_ai",
      svg: "/comments/hard.png",
    },
    {
      path: "/comments/08.jpg",
      alt: "Avatar",
      name: "Sergey Klinkov",
      mail: "@sergey_klinkov",
      text: "Real help! Helped a lot in our sales, especially with the cold leads!",
    },
    {
      path: "/comments/09.jpg",
      alt: "Avatar",
      name: "Kojump",
      mail: "@kojumpjumpingclub",
      text: "@fana_ai is amazing! Boosted our support productivity with 50%!",
    },
    {
      path: "/comments/10.jpg",
      alt: "Avatar",
      name: "Plank Pushers",
      mail: "@PlayPushGo",
      text: "Our Telegram game community really needed that! @fana_ai",
    },
  ];
  const theardSliderData = [
    {
      path: "/comments/11.jpg",
      alt: "Avatar",
      name: "Ivy Miller",
      mail: "@IvyMiller",
      text: "Excellent service! The accuracy of the repliers is amazing. @fana_ai",
    },
    {
      path: "/comments/12.jpg",
      alt: "Avatar",
      name: "Jan Zajfer",
      mail: "@janzajfert",
      text: "Great tool! I use @fana_ai to organise my sales emails and the bot created drafts right away. This, way no lead was missed!",
    },
    {
      path: "/comments/13.jpg",
      alt: "Avatar",
      name: "Gloria Allenkin",
      mail: "@GregoryAllen",
      text: "@fana_ai stands out for one simple reason: Precision. Every feature feels like it's been crafted with care. Amazing job!",
    },
    {
      path: "/comments/14.jpg",
      alt: "Avatar",
      name: "Aimagine",
      mail: "@AimagineNFT",
      text: "Awesome bot - Helped so much on what actually our community wants. ",
    },
    {
      path: "/comments/15.jpg",
      alt: "Avatar",
      name: "Diana Gravo",
      mail: "@DanaGray",
      text: "Superb help at our Discord server!",
    },
    {
      path: "/comments/11.jpg",
      alt: "Avatar",
      name: "Ivy Miller",
      mail: "@IvyMiller",
      text: "Excellent service! The accuracy of the repliers is amazing. @fana_ai",
    },
    {
      path: "/comments/12.jpg",
      alt: "Avatar",
      name: "Jan Zajfer",
      mail: "@janzajfert",
      text: "Great tool! I use @fana_ai to organise my sales emails and the bot created drafts right away. This, way no lead was missed!",
    },
    {
      path: "/comments/13.jpg",
      alt: "Avatar",
      name: "Gloria Allenkin",
      mail: "@GregoryAllen",
      text: "@fana_ai stands out for one simple reason: Precision. Every feature feels like it's been crafted with care. Amazing job!",
    },
    {
      path: "/comments/14.jpg",
      alt: "Avatar",
      name: "Aimagine",
      mail: "@AimagineNFT",
      text: "Awesome bot - Helped so much on what actually our community wants. ",
    },
    {
      path: "/comments/15.jpg",
      alt: "Avatar",
      name: "Diana Gravo",
      mail: "@DanaGray",
      text: "Superb help at our Discord server!",
    },
  ];
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  const isTablet = useMediaQuery({ minWidth: 731, maxWidth: 999 });
  const isMobile = useMediaQuery({ maxWidth: 730 });
  const [isMounted, setIsMounted] = useState(false);

  // Этот хук гарантирует, что код внутри будет выполнен только на клиенте
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null; // или вы можете вернуть placeholder
  }

  return (
    <section className="comments">
      <div className="comments__container">
        <div className="comments__title">What our clients say</div>
        <div className="comments__body">
          {isMobile && <SliderVertical slides={fullSliderData} />}
          {isTablet && (
            <>
              <SliderVertical slides={fisrtSliderTabletData} />
              <SliderVertical slides={secondSliderTabletData} revers />
            </>
          )}

          {isDesktop && (
            <>
              <SliderVertical slides={firstSliderData} />
              <SliderVertical slides={secondSliderData} revers />
              <SliderVertical slides={theardSliderData} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
