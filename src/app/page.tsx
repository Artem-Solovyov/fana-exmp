import { BookACall } from "@/components/BookACall/BookACall";
import { Header } from "@/components/Header/Header";
import { Assistant } from "@/components/sections/Assistant/Assistant";
import { Banner } from "@/components/sections/Banner/Banner";
import { Blog } from "@/components/sections/Blog/Blog";
import { Board } from "@/components/sections/Board/Board";
import { Case } from "@/components/sections/Case/Case";
import { Comments } from "@/components/sections/Comments/Comments";
import { Companies } from "@/components/sections/Companies/Companies";
import { Faq } from "@/components/sections/Faq/Faq";
import { Features } from "@/components/sections/Features/Features";
import { Footer } from "@/components/sections/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Possibilities } from "@/components/sections/Possibilities/Possibilities";
import { Steps } from "@/components/sections/Steps/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <div className="wrapper">
      <Image
        src="/like.svg"
        width={43}
        height={63}
        alt="Icon"
        priority={true}
        style={{ position: "absolute", top: "0", left: "0", opacity: 0, visibility: "hidden" }}
      />
      <header>
        <BookACall />
        <Header />
      </header>
      <main className="main">
        <Hero />
        <Companies />
        <Possibilities />
        <Assistant />
        <Board />
        <Case />
        <Comments />
        <Features />
        <Steps />
        <Banner />
        <Faq />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
