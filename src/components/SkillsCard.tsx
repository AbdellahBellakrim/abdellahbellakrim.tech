import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { skill } from "@/lib/data";

export default function SkillsCard(props: skill) {
  return (
    <Card className="w-full max-w-[480px]  text-[#B0ADAD] min-h-[230px]  shadow-none">
      <CardHeader className="flex gap-3 h-fit">
        <div className="min-w-[42px] min-h-[42px] rounded-md bg-[#38405A] flex justify-center items-center">
          <Image alt="nextui logo" height={30} width={30} src={props.banner} />
        </div>
        <div className="flex flex-col text-white font-semibold sm:text-[24px] text-[20px]">
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
