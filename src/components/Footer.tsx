import React from "react";
import { Image } from "@nextui-org/react";

function Footer() {
  return (
    <footer className="w-full h-[65px]  flex justify-center items-center p-8 z-[2]">
      <div className="text-[#B0ADAD] text-[18px] font-normal text-center z-[2] flex items-center justify-between w-full">
        <p>{`Abdellah Bellakrim © ${new Date().getFullYear()}`}</p>

        <div className="flex gap-1">
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={"/AbdellahBELLAKRIMCVResume.pdf"}
            target="_blank"
            download
          >
            <Image src="cvicon.svg" alt="cvicon.svg" className="rounded-none" />
          </a>
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_LINKEDIN}`}
            target="_blank"
          >
            <Image
              className="rounded-none"
              src="linkendinicon.svg"
              alt="linkendinicon.svg"
            />
          </a>
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_TWITTER}`}
            target="_blank"
          >
            <Image
              className="rounded-none"
              src="twittericon.svg"
              alt="twittericon.svg"
            />
          </a>
          <a
            className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_GITHUB}`}
            target="_blank"
          >
            <Image
              className="rounded-none"
              src="githubicon.svg"
              alt="githubicon.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
