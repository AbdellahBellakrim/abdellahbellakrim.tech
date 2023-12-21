import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { skill } from "@/lib/data";

export default function SkillsCard(props: skill) {
  return (
    <Card className="max-w-[480px] bg-[#292C36] text-[#B0ADAD] min-h-[210px] h-fit border border-divider">
      <CardHeader className="flex gap-3 h-[40%]">
        <div className="w-[42px] h-[42px] rounded-md bg-[#38405A] flex justify-center items-center">
          <Image alt="nextui logo" height={30} width={30} src={props.banner} />
        </div>
        <div className="flex flex-col text-white font-semibold text-[24px]">
          {props.header}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{props.content}</p>
      </CardBody>
    </Card>
  );
}
