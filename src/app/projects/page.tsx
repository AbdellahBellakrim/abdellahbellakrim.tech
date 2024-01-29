"use client";
import { globalContext } from "@/lib/data.context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const context: any = useContext(globalContext);
  const projects = context.project
    .slice()
    .reverse()
    .slice(0, context.project.size);
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full min-h-[calc(100vh-80px-65px)] px-[25px] max-w-[920px]  mx-auto">
      <div className="flex justify-center items-center  min-h-[200px] flex-col gap-4 mt-12">
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
    </div>
  );
}
