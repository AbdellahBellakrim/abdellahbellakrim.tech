"use client";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent: any) => {
  const WithAuth = (props: any) => {
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
      async function getUserData() {
        try {
          setTimeout(() => setLoadingData(false), 2000);
        } catch (error) {
          console.clear();
        }
      }
      getUserData();
    }, []);

    if (loadingData) {
      //   return <Loading />;
      return <p>loading</p>;
    }
    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuth;
};

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || "Component";
}

export default withAuth;
