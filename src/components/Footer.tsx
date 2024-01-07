import React from "react";

function Footer() {
  return (
    <footer className="w-full h-[65px]  flex justify-center items-center p-2 z-[2]">
      <div className="text-[#B0ADAD] text-[18px] font-normal text-center z-[2]">
        <p>{`Abdellah Bellakrim © ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
}

export default Footer;
