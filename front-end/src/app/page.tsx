"use client";

import SkillsCard from "@/components/SkillsCard";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { skills, projects } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const breakpoints = {
  // Define breakpoints and the number of slides to show at each breakpoint
  320: { slidesPerView: 1 },
  480: { slidesPerView: 2 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  // Add more breakpoints as needed
};
export default function LadingPage() {
  const [skill, setSkills]: any = useState([]);
  const [project, setProject]: any = useState([]);

  useEffect(() => {
    setSkills(skills);
    setProject(projects);
  }, [skills, projects]);
  const router = useRouter();

  return (
    <main
      className={`h-full w-full flex flex-col bg-[#212121] ${PoppinsFont.className}`}
    >
      <section
        id="Home"
        className="min-h-screen w-full flex justify-center items-center  flex-col p-[10px] gap-6 relative z-[1] overflow-x-hidden"
        style={{
          backgroundImage: 'url("bg-image2.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          initial={{ opacity: 0.6, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          className={`${PoppinsFont.className} font-semibold text-[3.8em] md:text[4.8em] lg:text-[5em] text-center bg-clip-text text-transparent bg-[linear-gradient(to_left,theme(colors.indigo.100),theme(colors.indigo.100),theme(colors.amber.600),theme(colors.indigo.100),theme(colors.indigo.100),theme(colors.blue.600),theme(colors.indigo.100),theme(colors.indigo.100))] bg-[length:200%_auto] animate-gradient`}
        >
          I’m Abdelah Bellakrim
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className={`${PoppinsFont.className} font-semibold text-[1.4em] md:text[1.8em] lg:text-[2em] text-center`}
        >
          software engineer - web developer{" "}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
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
        {/* <svg
          className="absolute bottom-[-5px] z-[-1]"
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(58, 58, 58, 1)" offset="0%"></stop>
              <stop stop-color="rgba(58, 58, 58, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,50L120,56.7C240,63,480,77,720,73.3C960,70,1200,50,1440,46.7C1680,43,1920,57,2160,58.3C2400,60,2640,50,2880,50C3120,50,3360,60,3600,68.3C3840,77,4080,83,4320,76.7C4560,70,4800,50,5040,45C5280,40,5520,50,5760,48.3C6000,47,6240,33,6480,25C6720,17,6960,13,7200,23.3C7440,33,7680,57,7920,66.7C8160,77,8400,73,8640,68.3C8880,63,9120,57,9360,48.3C9600,40,9840,30,10080,36.7C10320,43,10560,67,10800,75C11040,83,11280,77,11520,75C11760,73,12000,77,12240,71.7C12480,67,12720,53,12960,40C13200,27,13440,13,13680,11.7C13920,10,14160,20,14400,26.7C14640,33,14880,37,15120,36.7C15360,37,15600,33,15840,38.3C16080,43,16320,57,16560,66.7C16800,77,17040,83,17160,86.7L17280,90L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"
          ></path>
        </svg> */}
      </section>
      <section
        id="About"
        className="w-full flex flex-col sm:p-[41px] p-[24px] items-center gap-14"
      >
        <div className=" w-full lg:max-w-[1440px] flex flex-col lg:flex-row-reverse gap-8 h-fit">
          <div className="w-full lg:w-[50%]">
            <h2 className="text-[#0070F0] text-[24px] font-semibold tracking-[2.4px]">
              ABOUT ME
            </h2>
            <h1 className="text-white text-[36px] font-semibold">
              I’m Abdelah Bellakrim
            </h1>
            <div className="text-[#B0ADAD] text-[18px] font-normal flex flex-col gap-4 text-justify tracking-tight">
              <p>
                {`                A Software Engineer and web developer, proud graduate of the
                esteemed 1337 coding school. My academic journey equipped me
                with a diverse skill set, emphasizing problem-solving. I've
                successfully completed various projects during my studies,
                showcasing my ability to break down complex issues and utilize
                technologies like C/C++, JavaScript, Next.js, React.js, Nest.js,
                HTML, CSS, Tailwind, Docker , etc.`}
              </p>
              <p>
                {`                My passion lies in algorithms, data structures, and
                problem-solving—crucial aspects of the web development field. I
                thrive on staying updated with industry trends and continuously
                expanding my knowledge. Proficient in a range of languages and
                frameworks, including Next.js, React.js, Nest.js, and more, I'm
                dedicated to delivering effective and innovative solutions to
                the ever-evolving challenges of web development.`}
              </p>
              <p>
                {`                In summary, I'm driven by a continuous desire to learn and
                adapt, ensuring that I remain at the forefront of technological
                advancements. As a Software Engineer, I am enthusiastic about
                leveraging my expertise to create efficient and scalable
                solutions that address the evolving challenges of the digital
                landscape.`}
              </p>
            </div>
          </div>

          <div className="lg:w-[50%] flex justify-center items-center">
            <div className="h-full w-full  z-[1] flex items-center justify-center">
              <div className="w-[80%] max-w-[390px] lg:min-w-[390px] p-[2px] relative z-[1]">
                <img
                  src="goat.jpg"
                  alt="goat.jpg"
                  className="object-cover w-full h-full rounded-tl-2xl rounded-br-2xl z-[1]"
                />
                <div className="border-[2px] border-white bg-transparent w-full h-full  rounded-tl-2xl rounded-br-2xl z-[-1]  p-3 m-3  absolute left-[2px] top-[2px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[1440px]  tex-center flex justify-center items-center flex-col h-fit">
          <h2 className="text-[#0070F0] text-[24px] font-semibold tracking-[2.4px]">
            what I do
          </h2>
          <h1 className="text-white text-[36px] font-semibold text-center ">
            SPECIALIZING IN
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-6 mt-4 min-h-[210px]">
            {skill.map((map: any) => {
              return (
                <SkillsCard
                  header={map.header}
                  banner={map.banner}
                  content={map.content}
                  id={map.id}
                  key={map.id}
                ></SkillsCard>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="Work"
        className="w-full flex flex-col sm:p-[41px] p-[24px] items-center gap-14"
      >
        <div className="w-full h-full tex-center flex justify-center items-center flex-col gap-8">
          <div className="w-full lg:max-w-[1440px]  tex-center flex justify-center items-center flex-col h-fit ">
            <h2 className="text-[#0070F0] text-[24px] font-semibold tracking-[2.4px]">
              PORTFOLIO
            </h2>
            <h1 className="text-white text-[36px] font-semibold text-center">
              LATEST PROJECTS
            </h1>
          </div>
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={30}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="w-[100%] 2xl:w-[70%] max-w-[1440px]"
          >
            {project.map((map: any) => {
              return (
                <SwiperSlide key={map.id}>
                  <ProjectCard
                    id={map.id}
                    header={map.header}
                    banner={map.banner}
                    link={map.link}
                    key={map.id}
                  ></ProjectCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-full lg:max-w-[980px] h-[277px] tex-center flex justify-center items-center bg-[#292C36] rounded-xl flex-col gap-6 p-4">
          <div className="text-white text-[36px] font-semibold text-center">
            Have any project in mind ?
          </div>
          <Button
            className="bg-[#0070F0] rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact");
            }}
          >
            Contact me
          </Button>
        </div>
      </section>
      <footer className="w-full h-[156px] bg-[#292C36]"></footer>
    </main>
  );
}
