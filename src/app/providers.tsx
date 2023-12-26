"use client";
import { useEffect, useState } from "react";
import { globalContext } from "@/lib/data.context";
import { skills, projects } from "@/lib/data";
import Loading from "@/components/Loading";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
const HOC = (WrappedComponent: any) => {
  const HOC = (props: any) => {
    const [skill, setSkill]: any = useState([]);
    const [project, setProject]: any = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
      function getData() {
        try {
          setSkill(skills);
          setProject(projects);
          setTimeout(() => setLoadingData(false), 2000);
        } catch (error) {
          console.clear();
        }
      }
      getData();
    }, [loadingData]);

    return loadingData ? (
      <Loading />
    ) : (
      <globalContext.Provider value={{ skill, setSkill, project, setProject }}>
        <NavBar />
        <WrappedComponent {...props} />
        <Footer />
      </globalContext.Provider>
    );
  };

  HOC.displayName = `HOC(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default HOC(UIProvider);
