import React from "react";
import { Card, CardBody, Divider, Image, Link, Code } from "@nextui-org/react";
import { project } from "@/lib/data";

export default function ProjectCard(props: project) {
  return (
    <Card className="w-full shadow-none flex h-[140px] rounded-md bg-transparent border border-divider">
      <div className="overflow-hidden rounded-none w-[280px] h-full bg-red-700 flex justify-center items-center">
        <img
          className="min-w-full min-h-full rounded-none object-cover"
          src={props.banner}
        ></img>
      </div>

      {/* <CardBody className="gap-4 flex p-6 justify-between">
        <div className="gap-4 flex flex-col">
          <div className="flex flex-col text-white font-semibold text-[20px] truncate">
            {props.header}
          </div>
          <div className="flex flex-wrap gap-4">
            {props.tech.map((techno, index) => (
              <Code color="primary" key={index}>
                {techno}
              </Code>
            ))}
          </div>
        </div>
        <div className="gap-4 flex flex-col h-fit">
          <Divider />
          <Link isExternal showAnchorIcon href={props.link}>
            Visit source code on GitHub.
          </Link>
        </div>
      </CardBody> */}
    </Card>
  );
}
