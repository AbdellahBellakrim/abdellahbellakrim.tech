"use client";

import { Poppins } from "next/font/google";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";

const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function LadingPage() {
  return (
    <main
      className={`h-full w-full flex flex-col  items-center ${PoppinsFont.className}`}
    >
      <HomeSection />
      <AboutSection />
      <WorkSection />
    </main>
  );
}
