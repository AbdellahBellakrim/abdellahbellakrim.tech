import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Link,
  Code,
} from "@nextui-org/react";
import { project } from "@/lib/data";

export default function ProjectCard(props: project) {
  return (
    <Card className="w-full max-w-[480px] text-[#B0ADAD]  min-h-[400px] h-full m-auto border border-divider bg-[#212529] bg-opacity-70 shadow-none">
      <CardHeader className="flex gap-3 h-fit w-full p-0 m-0 overflow-hidden rounded-none">
        <Image
          className="w-[480px] h-[250px] object-cover rounded-none"
          src={props.banner}
        ></Image>
      </CardHeader>
      <Divider />
      <CardBody className="gap-4 flex p-6 justify-between">
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
      </CardBody>
    </Card>
  );
}
