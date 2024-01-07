"use client";

import { motion } from "framer-motion";

function HomeSection() {
  return (
    <section
      id="Home"
      className="min-h-screen min-w-full p-[24px] pt-[65px] z-[1] overflow-hidden  relative flex justify-center items-center"
    >
      <div className="flex items-center justify-center  flex-col w-full h-fit gap-6 z-[1]">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className={` font-semibold text-[3.4em] md:text[4.8em] lg:text-[5em] text-center text-white `}
        >
          I’m Abdelah Bellakrim
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className={` font-semibold text-[1.4em] md:text[1.8em] lg:text-[2em] text-center`}
        >
          software engineer - web developer{" "}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3.5,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 w-1/8 col-auto"
        >
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={"/AbdellahBELLAKRIMCVResume.pdf"}
            target="_blank"
            download
          >
            <img src="cvicon.svg" alt="cvicon.svg" />
          </a>
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_LINKEDIN}`}
            target="_blank"
          >
            <img src="linkendinicon.svg" alt="linkendinicon.svg" />
          </a>
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_TWITTER}`}
            target="_blank"
          >
            <img src="twittericon.svg" alt="twittericon.svg" />
          </a>
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_GITHUB}`}
            target="_blank"
          >
            <img src="githubicon.svg" alt="githubicon.svg" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeSection;
