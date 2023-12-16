"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";

const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function LadingPage() {
  return (
    <main>
      <section
        id="Home"
        className="h-[70vh] w-full flex justify-center items-center  flex-col p-[5px] gap-6"
        style={{
          backgroundImage: 'url("bg-image2.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className={`${PoppinsFont.className} font-semibold text-[3.8em] md:text[4.8em] lg:text-[5em] text-center bg-clip-text text-transparent bg-[linear-gradient(to_left,theme(colors.indigo.100),theme(colors.indigo.100),theme(colors.blue.500),theme(colors.indigo.100),theme(colors.indigo.100))] bg-[length:200%_auto] animate-gradient`}
        >
          I’m Abdelah Bellakrim
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          className={`${PoppinsFont.className} font-semibold text-[1.4em] md:text[1.8em] lg:text-[2em] text-center`}
        >
          software engineer - web developer{" "}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 w-1/8 col-auto"
        >
          <Link
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={"Abdellah BELLAKRIM CV Resume.pdf"}
            target="_blank"
          >
            <img src="cvicon.svg" alt="cvicon.svg" />
          </Link>
          <Link
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={"https://www.linkedin.com/in/abdellahbellakrim/"}
            target="_blank"
          >
            <img src="linkendinicon.svg" alt="linkendinicon.svg" />
          </Link>
          <Link
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={"https://twitter.com/c0d3crush3r"}
            target="_blank"
          >
            <img src="twittericon.svg" alt="twittericon.svg" />
          </Link>
          <Link
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={"https://github.com/AbdellahBellakrim"}
            target="_blank"
          >
            <img src="githubicon.svg" alt="githubicon.svg" />
          </Link>
        </motion.div>
      </section>
      <section className="h-[90vh] bg-[#3A3A3A]"></section>
    </main>
  );
}
