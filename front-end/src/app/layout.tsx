import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Abdellah",
  description:
    "Abdellah Bellakrim, a skilled software engineer with three years of experience, specializing in web development. Currently honing expertise as a student at 1337 coding school.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#212121]`}>
        <Providers>
          <NavBar />
          {children}
          <footer className="w-full h-[65px] bg-[#292C36] flex justify-center items-center p-2 border-t border-divider z-[2]">
            <div className="text-[#B0ADAD] text-[18px] font-normal text-center">
              <p>{`Abdellah Bellakrim © ${new Date().getFullYear()}`}</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

// class="flex z-40 w-full items-center justify-center data-[menu-open=true]:border-none top-0 inset-x-0 border-b border-divider backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70 h-[65px] fixed"
