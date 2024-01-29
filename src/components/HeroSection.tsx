import { Image } from "@nextui-org/react";

function HeroSection() {
  return (
    <div className="w-full h-full py-14 flex flex-col md:flex-row gap-8">
      <div className=" max-h-36 max-w-36 p-1 bg-gradient-to-tr from-blue-700 to-red-700 rounded-full mx-auto md:m-0">
        <div className="p-[2px] bg-black rounded-full">
          <img
            src="goat.jpg"
            alt="goat.jpg"
            className="rounded-full hover:cursor-pointer"
          ></img>
        </div>
      </div>
      <div className="w-full flex flex-col justify-around gap-4  border-b border-divider p-1">
        <a className="font-semibold text-2xl text-[#B0ADAD] flex flex-col gap-2">
          <h2>
            <span className="text-white">Hola! I'm Abdellah,</span> also known
            as <span className="text-white">c0d3cruch3r</span>.
          </h2>
          <h2>I'm a software engineer and web developer.</h2>
        </a>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-16 text-[#B0ADAD] items-start">
          <a
            className="flex gap-2 justify-center items-center text-end hover:cursor-pointer hover:text-blue-500"
            href={`${process.env.NEXT_PUBLIC_API_TWITTER}`}
            target="_blank"
          >
            <Image
              className="w-4 h-4 rounded-none"
              src="TwitterIcon.png"
              alt="TwitterIcon.png"
            ></Image>
            <span>Twitter</span>
          </a>
          <a
            className="flex gap-2 justify-center items-center text-end hover:cursor-pointer hover:text-blue-500"
            href={`${process.env.NEXT_PUBLIC_API_LINKEDIN}`}
            target="_blank"
          >
            <Image
              className="w-4 h-4 rounded-none"
              src="LinkedIicon.png"
              alt="LinkedIicon.png"
            ></Image>
            <span>LinkedIn</span>
          </a>
          <a
            className="flex gap-2 justify-center items-center text-end hover:cursor-pointer hover:text-orange-500"
            href={`${process.env.NEXT_PUBLIC_API_GITHUB}`}
            target="_blank"
          >
            <Image
              className="w-4 h-4"
              src="GithubIcon.png"
              alt="GithubIcon.png"
            ></Image>
            <span>Github</span>
          </a>
          <a
            className="flex gap-2 justify-center items-center text-end hover:cursor-pointer hover:text-green-500"
            href={`mailto:${process.env.NEXT_PUBLIC_API_EMAIL}`}
          >
            <Image
              className="w-4 h-4"
              src="EmailIcon.png"
              alt="EmailIcon.png"
            ></Image>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
