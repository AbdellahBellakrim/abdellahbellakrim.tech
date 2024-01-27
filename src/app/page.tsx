"use client";

import { Image } from "@nextui-org/react";

export default function LadingPage() {
  return (
    <main
      className={`w-full min-h-[calc(100vh-80px-65px)] px-[25px] max-w-[920px]  mx-auto`}
    >
      <div className="w-full h-full py-14 flex flex-col md:flex-row gap-8">
        <div className=" max-h-36 max-w-36 p-1 bg-gradient-to-tr from-blue-700 to-red-700 rounded-full mx-auto md:m-0">
          <div className="p-[2px] bg-white rounded-full">
            <Image
              src="goat.jpg"
              alt="goat.jpg"
              className="rounded-full hover:cursor-pointer "
            ></Image>
          </div>
        </div>
        <div className="w-full flex flex-col justify-around">
          <div className="font-semibold text-2xl text-[#B0ADAD] flex flex-col gap-2">
            <h2>
              <span className="text-white">Hola! I'm Abdellah,</span> also known
              as <span className="text-white">c0d3cruch3r</span>.
            </h2>
            <h2>I'm software engineer and web developer.</h2>
          </div>
          <div className="w-full flex flex-col md:flex-row  gap-24">
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>Github</div>
            <div>Email</div>
          </div>
        </div>
      </div>
    </main>
  );
}
