"use client";

import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";

export default function LadingPage() {
  return (
    <main className={`h-full w-full flex flex-col  items-center`}>
      <HomeSection />
      <AboutSection />
      <WorkSection />
    </main>
  );
}
