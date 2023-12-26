"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { globalContext } from "@/lib/data.context";
import { skills, projects } from "@/lib/data";
import Loading from "@/components/Loading";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [skill, setSkill]: any = useState([]);
  const [project, setProject]: any = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    function getData() {
      try {
        setSkill(skills);
        setProject(projects);
        setTimeout(() => setLoadingData(false), 3000);
      } catch (error) {
        console.clear();
      }
    }
    getData();
  }, [loadingData]);

  if (loadingData) {
    return <Loading />;
  } else
    return (
      <globalContext.Provider value={{ skill, setSkill, project, setProject }}>
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </globalContext.Provider>
    );
};

export default Providers;
