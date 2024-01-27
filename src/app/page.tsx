"use client";

import HeroSection from "@/components/HeroSection";
import RecentBlogs from "@/components/RecentBlogs";
import RecentProjects from "@/components/RecentProjects";

export default function LadingPage() {
  return (
    <main
      className={`w-full min-h-[calc(100vh-80px-65px)] px-[25px] max-w-[920px]  mx-auto`}
    >
      <HeroSection />
      {/* <RecentBlogs /> */}
      <RecentProjects />
    </main>
  );
}
