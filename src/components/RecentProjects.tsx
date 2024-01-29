import { globalContext } from "@/lib/data.context";
import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

function RecentProjects() {
  const context: any = useContext(globalContext);
  const projects = context.project.slice().reverse().slice(0, 3);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold  text-white">MY RECENT PROJECTS:</h2>
      <div className="flex justify-center items-center  min-h-[200px] flex-col gap-4">
        {projects.map((project: any) => (
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
      <h3
        className="text-blue-700 font-semibold hover:cursor-pointer hover:opacity-80 "
        onClick={() => {
          router.push("/projects");
        }}
      >
        See more projects ?
      </h3>
    </div>
  );
}

export default RecentProjects;
