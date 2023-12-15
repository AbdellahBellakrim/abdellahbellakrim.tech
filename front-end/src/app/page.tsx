"use client";

import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function LadingPage() {
  return (
    <main>
      <section
        id="Home"
        className="h-[calc(100vh-65px)] w-full flex justify-center items-center  flex-col p-[3px] gap-6"
        style={{
          backgroundImage: 'url("bg-image2.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className={`${PoppinsFont.className} font-semibold text-[3.8em] md:text[4.8em] lg:text-[5em] text-center`}
        >
          I’m Abdelah Bellakrim
        </h1>
        <h3
          className={`${PoppinsFont.className} font-semibold text-[1.4em] md:text[1.8em] lg:text-[2em] text-center`}
        >
          software engineer - web developer{" "}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-1/8 col-auto">
          <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70">
            <img src="cvicon.svg" alt="cvicon.svg" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70">
            <img src="linkendinicon.svg" alt="linkendinicon.svg" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70">
            <img src="twittericon.svg" alt="twittericon.svg" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70">
            <img src="githubicon.svg" alt="githubicon.svg" />
          </div>
        </div>
      </section>
    </main>
  );
}
