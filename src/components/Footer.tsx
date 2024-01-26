import React from "react";
import { Image } from "@nextui-org/react";

function Footer() {
  return (
    <footer className="w-full h-[80px]  flex justify-center items-center p-8 z-[2] max-w-[1050px] m-auto">
      <div className="text-[#B0ADAD] text-[16px] font-normal text-center z-[2] flex items-center justify-between w-full  flex-col md:flex-row gap-2">
        <p>{`Abdellah Bellakrim © ${new Date().getFullYear()}`}</p>

        <div className="flex gap-6">
          <a
            className="rounded-full h-fit w-fit hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_LINKEDIN}`}
            target="_blank"
          >
            <Image
              className="rounded-none h-6 w-6"
              src="LinkedIicon.png"
              alt="LinkedIicon.png"
            />
          </a>
          <a
            className="rounded-full h-fit w-fit hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_TWITTER}`}
            target="_blank"
          >
            <Image
              className="rounded-none h-6 w-6"
              src="TwitterIcon.png"
              alt="TwitterIcon.png"
            />
          </a>
          <a
            className="rounded-full h-fit w-fit hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_GITHUB}`}
            target="_blank"
          >
            <Image
              className="rounded-none h-6 w-6"
              src="GithubIcon.png"
              alt="GithubIcon.png"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
