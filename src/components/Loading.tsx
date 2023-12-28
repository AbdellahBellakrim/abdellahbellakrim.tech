"use client";
import React from "react";
import Lottie from "react-lottie-player";
import LoadingAnimation from "../../public/LoadingMiniCube.json";
import { motion } from "framer-motion";
function Loading() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center overflow-hidden flex-col relative z-0 p-8"
      style={{
        backgroundImage: 'url("bglive.gif")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 3,
        }}
        className={` font-semibold text-[3.4em] md:text[4.8em] lg:text-[5em] text-center text-white tracking-widest`}
      >
        Welcome to my world !
      </motion.h1>
    </div>
  );
}

export default Loading;
