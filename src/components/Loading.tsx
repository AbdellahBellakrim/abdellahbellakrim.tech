"use client";
import React from "react";
import Lottie from "react-lottie-player";
import LoadingAnimation from "../../public/LoadingMiniCube.json";
function Loading() {
  return (
    <div className="w-screen h-[calc(100vh-65px)] bg-[#212121] flex justify-center items-center overflow-hidden flex-col">
      <Lottie
        loop
        animationData={LoadingAnimation}
        play
        style={{ width: 600, height: 600 }}
      />
    </div>
  );
}

export default Loading;
