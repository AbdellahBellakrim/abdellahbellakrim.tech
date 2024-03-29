import React from "react";
import { Image } from "@nextui-org/react";

function Footer() {
  return (
    <footer className="w-full h-[80px]  flex justify-center items-center z-[2] px-6 max-w-[920px] m-auto mt-4 md:mt-0">
      <div className="text-[#B0ADAD] text-[16px] font-normal  z-[2] flex  justify-between w-full  flex-col-reverse sm:flex-row gap-3">
        <p>{`Abdellah Bellakrim © ${new Date().getFullYear()}`}</p>

        <div className="flex gap-6">
          <a
            className="rounded-full h-fit w-fit hover:cursor-pointer hover:opacity-70"
            href={`${process.env.NEXT_PUBLIC_API_LINKEDIN}`}
            target="_blank"
          >
            <Image
              className="rounded-none h-5 w-5"
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
              className="rounded-none h-5 w-5"
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
              className="rounded-none h-5 w-5"
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
