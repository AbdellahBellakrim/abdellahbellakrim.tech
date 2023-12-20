import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Button,
  Link,
} from "@nextui-org/react";

export default function ProjectCard(props: any) {
  return (
    <Card className="w-full max-w-[400px] bg-[#292C36]  m-0 shadow-none text-[#B0ADAD]  h-[380px]">
      <CardHeader className="flex gap-3 h-[75%] w-full p-0 m-0 overflow-hidden">
        <Image
          alt="nextui logo"
          src={props.banner}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <Divider />
      <CardBody className="gap-2">
        <div className="flex flex-col text-white font-semibold text-[20px]">
          {props.content}
        </div>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardBody>
    </Card>
  );
}
