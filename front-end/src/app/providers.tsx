"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HOC from "@/components/HOC";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NavBar />
      {children}
      <Footer />
    </NextUIProvider>
  );
};

export default HOC(Providers);
