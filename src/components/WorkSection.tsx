import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { globalContext } from "@/lib/data.context";
import { useContext } from "react";
function WorkSection() {
  const context: any = useContext(globalContext);
  const project = context.project;
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? project.slice().reverse()
    : project.slice().reverse().slice(0, 3);

  const router = useRouter();
  return (
    <section
      id="Work"
      className="w-full h-fit flex items-center justify-center"
    >
      <div className="w-full  lg:max-w-[1440px] flex flex-col sm:p-[41px] p-[24px] items-center gap-20 relative section">
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

        <div className="w-full lg:max-w-[980px] h-[277px] text-center flex justify-center items-center bg-[#292C36] rounded-xl flex-col gap-6 p-4 z-[2] shadow-xl border border-divider bg-opacity-70 mb-16">
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
      </div>
    </section>
  );
}

export default WorkSection;
