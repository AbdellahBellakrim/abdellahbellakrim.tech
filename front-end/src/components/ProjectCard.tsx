import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";

export default function ProjectCard(props: any) {
  return (
    <Card className="w-full max-w-[400px] bg-[#292C36]  m-0 shadow-none text-[#B0ADAD]  h-[380px]">
      <CardHeader className="flex gap-3 h-[80%]">
        <Image
          alt="nextui logo"
          src={props.banner}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{props.content}</p>
      </CardBody>
    </Card>
  );
}
