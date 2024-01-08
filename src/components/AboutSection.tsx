import SkillsCard from "@/components/SkillsCard";
import { motion } from "framer-motion";
import { globalContext } from "@/lib/data.context";
import { useContext } from "react";
import { Image } from "@nextui-org/react";
function AboutSection() {
  const context: any = useContext(globalContext);
  const skill = context.skill;

  return (
    <section
      id="About"
      className="w-full flex flex-col sm:p-[41px] p-[24px] items-center gap-20 relative overflow-hidden section"
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
            <div className="w-[80%] max-w-[450px] lg:min-w-[450px] p-[2px] relative z-[1] bg-divider rounded-tl-2xl rounded-br-2xl">
              <Image
                src="goat.jpg"
                alt="goat.jpg"
                className="object-cover w-full h-full rounded-none rounded-tl-2xl rounded-br-2xl z-[1]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit min-w-[100vw] flex justify-center items-center p-12 z-[2] bg-[#343a40] bg-opacity-70">
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
                    transition: { delay: 0.4 * index },
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
  );
}

export default AboutSection;
