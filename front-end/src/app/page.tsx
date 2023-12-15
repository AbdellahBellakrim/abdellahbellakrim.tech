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
        className="h-[calc(100vh-65px)] w-full flex justify-center items-center  flex-col p-[3px]"
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
        {/* <div>
          <img src="VectorCVButton.svg" alt="VectorCVButton.svg" />
        </div> */}
      </section>
    </main>
  );
}
