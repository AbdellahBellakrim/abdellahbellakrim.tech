"use client";
import ContactComponent from "@/components/ContactComponent";
import LocationComponent from "@/components/LocationComponent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-80px-65px)] flex items-center justify-center max-w-[920px] mx-auto  text-[#B0ADAD] text-sm">
      <div className="w-full h-full flex flex-col  items-center gap-14 p-6 z-[2]">
        <ContactComponent />
        <LocationComponent />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className={`absolute`}
      />
    </div>
  );
}
