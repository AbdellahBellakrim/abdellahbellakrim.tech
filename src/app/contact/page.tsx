"use client";
import ContactComponent from "@/components/ContactComponent";
import LocationComponent from "@/components/LocationComponent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-65px)] p-[25px] pt-[80px] flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full h-full flex flex-col lg:flex-row  items-center lg:justify-between lg:max-w-[1440px] gap-4 lg:gap-6 border border-divider p-6 rounded-lg bg-[#292C36] bg-opacity-70">
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
    </main>
  );
}
