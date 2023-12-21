import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { project } from "@/lib/data";

export default function ProjectCard(props: project) {
  return (
    <Card className="w-full max-w-[400px] bg-[#292C36]  m-0 shadow-none text-[#B0ADAD]  h-[400px]">
      <CardHeader className="flex gap-3 h-[70%] w-full p-0 m-0 overflow-hidden rounded-none">
        <div
          className="w-full h-full p-0 m-0"
          style={{
            backgroundImage: `url(${props.banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </CardHeader>
      <Divider />
      <CardBody className="gap-2">
        <div className="flex flex-col text-white font-semibold text-[20px] truncate">
          {props.header}
        </div>
        <Link isExternal showAnchorIcon href={props.link}>
          Visit source code on GitHub.
        </Link>
      </CardBody>
    </Card>
  );
}
