"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";

const HOC = (WrappedComponent: any) => {
  const HOC = (props: any) => {
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
      async function getData() {
        try {
          setTimeout(() => setLoadingData(false), 3000);
        } catch (error) {
          console.clear();
        }
      }
      getData();
    }, []);

    if (loadingData) {
      return <Loading />;
    }
    return <WrappedComponent {...props} />;
  };

  HOC.displayName = `HOC(${getDisplayName(WrappedComponent)})`;

  return HOC;
};

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default HOC;
