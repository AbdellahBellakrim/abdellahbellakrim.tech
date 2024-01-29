import React from "react";
import { Card, CardBody, Divider, Image, Link, Code } from "@nextui-org/react";
import { project } from "@/lib/data";

export default function ProjectCard(props: project) {
  return (
    <Card className="w-full flex h-fit md:h-[140px] rounded-xl shadow-none bg-white bg-opacity-5 p-2 relative gap-3 flex-col md:flex-row">
      <div
        className="w-full md:max-w-[320px] h-[160px] md:h-full opacity-70 z-0 flex justify-center items-center rounded-md"
        style={{
          backgroundImage: `url("${props.banner}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="flex flex-col justify-around h-1/2 md:h-full w-full p-1 gap-3">
        <div className="flex flex-col text-white font-semibold text-[20px] truncate">
          {props.header}
        </div>

        <div className="gap-4 flex flex-col">
          <div className="flex flex-wrap gap-1">
            {props.tech.map((techno, index) => (
              <Code color="default" key={index}>
                {techno}
              </Code>
            ))}
          </div>
        </div>
        <a
          className="h-7 w-7 rounded-full bg-white absolute top-0 right-0 mt-4 mr-4 md:mt-2 md:mr-2 flex justify-center items-center hover:cursor-pointer hover:bg-opacity-70"
          href={`${props.link}`}
          target="_blank"
        >
          <Image
            className="rounded-none h-5 w-5"
            src="github.png"
            alt="github.png"
          />
        </a>
      </div>
    </Card>
  );
}
