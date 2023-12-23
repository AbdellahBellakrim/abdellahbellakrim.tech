"use client";

import SkillsCard from "@/components/SkillsCard";
import { animate, motion } from "framer-motion";
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
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? project.slice().reverse()
    : project.slice().reverse().slice(0, 3);

  useEffect(() => {
    setSkills(skills);
    setProject(projects);
  }, [skills, projects]);
  const router = useRouter();

  return (
    <main
      className={`h-full w-full flex flex-col  items-center ${PoppinsFont.className}`}
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
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
          }}
          className={`${PoppinsFont.className} font-semibold text-[3.8em] md:text[4.8em] lg:text-[5em] text-center bg-clip-text text-transparent bg-[linear-gradient(to_left,theme(colors.indigo.100),theme(colors.indigo.100),theme(colors.amber.600),theme(colors.indigo.100),theme(colors.indigo.100),theme(colors.blue.600),theme(colors.indigo.100),theme(colors.indigo.100))] bg-[length:200%_auto] animate-gradient`}
        >
          I’m Abdelah Bellakrim
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className={`${PoppinsFont.className} font-semibold text-[1.4em] md:text[1.8em] lg:text-[2em] text-center`}
        >
          software engineer - web developer{" "}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
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
      <section
        id="About"
        className="w-full flex flex-col sm:p-[41px] p-[24px] items-center gap-14 relative overflow-hidden"
      >
        <div className=" w-full lg:max-w-[1440px] flex flex-col lg:flex-row-reverse gap-8 h-fit z-[2]">
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
                <div className="border-2 border-divider bg-transparent w-full h-full  rounded-tl-2xl rounded-br-2xl z-[-1]  p-3 m-3  absolute left-[2px] top-[2px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit min-w-[100vw] bg-[#292C36] flex justify-center items-center p-12 z-[2] ">
          <div className="w-full lg:max-w-[1440px]  tex-center flex justify-center items-center flex-col h-fit ">
            <h2 className="text-[#0070F0] text-[24px] font-semibold tracking-[2.4px]">
              what I do
            </h2>
            <h1 className="text-white text-[36px] font-semibold text-center ">
              SPECIALIZING IN
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-6 mt-4 min-h-[210px]">
              {skill.map((map: any, index: number) => {
                return (
                  <motion.div
                    key={map.id}
                    className="w-fit h-fit"
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 * index },
                    }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 100 }}
                  >
                    <SkillsCard
                      header={map.header}
                      banner={map.banner}
                      content={map.content}
                      id={map.id}
                    ></SkillsCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id="Work"
        className="w-full  lg:max-w-[1440px] flex flex-col sm:p-[41px] p-[24px] items-center gap-14 relative overflow-y-clip"
      >
        <div className="w-full h-full tex-center flex justify-center items-center flex-col gap-8 z-[2]">
          <div className="w-full lg:max-w-[1440px]  tex-center flex justify-center items-center flex-col h-fit ">
            <h2 className="text-[#0070F0] text-[24px] font-semibold tracking-[2.4px]">
              PORTFOLIO
            </h2>
            <h1 className="text-white text-[36px] font-semibold text-center">
              LATEST PROJECTS
            </h1>
          </div>
          <div className="grid grid-cols-1   xl:grid-cols-3 gap-8 mt-4 min-h-[210px] w-full lg:max-w-[1440px]">
            {displayedProjects.map((project: any) => (
              <ProjectCard
                id={project.id}
                header={project.header}
                banner={project.banner}
                link={project.link}
                key={project.id}
                tech={project.tech}
              ></ProjectCard>
            ))}
          </div>
          {!showAll && (
            <Button
              color="primary"
              className="rounded-xl font-semibold px-8"
              onClick={(e) => {
                e.preventDefault();
                setShowAll(true);
              }}
            >
              Show all
            </Button>
          )}
        </div>

        <div className="w-full lg:max-w-[980px] h-[277px] text-center flex justify-center items-center bg-[#292C36] rounded-xl flex-col gap-6 p-4 z-[2] shadow-xl">
          <div className="text-white text-[36px] font-semibold text-center">
            Have any project in mind ?
          </div>
          <Button
            color="primary"
            className="rounded-xl font-semibold  px-8"
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact");
            }}
          >
            Contact me
          </Button>
        </div>
      </section>
    </main>
  );
}
// TODO: add scrolling animation , try to add shadowing for project section and making it more cool and animated, add contact section
