import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function SkillsCard() {
  return (
    <Card className="max-w-[400px] bg-[#292C36] shadow-none text-[#B0ADAD] h-[190px]">
      <CardHeader className="flex gap-3 h-[60%]">
        <div className="w-[42px] h-[42px] rounded-md bg-[#38405A] flex justify-center items-center">
          <Image
            alt="nextui logo"
            height={30}
            width={30}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          />
        </div>
        <div className="flex flex-col text-white">l3onwan</div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}
