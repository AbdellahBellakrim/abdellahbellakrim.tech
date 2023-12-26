import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./providers";
const PoppinsFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
      <body className={`bg-[#212121] ${PoppinsFont.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
