"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Work", "About", "Blog", "Contact"];

  const router = useRouter();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-[65px] bg-opacity-100 overflow-hidden"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand
          className="hover:cursor-pointer hover:opacity-100  opacity-85"
          onClick={() => router.push("/")}
        >
          <p className="font-bold tracking-widest text-[18px]">ABDELLAH</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full font-semibold hover:cursor-pointer opacity-85 hover:opacity-100"
              size="lg"
              onClick={() => {
                item === "Contact"
                  ? router.push("contact")
                  : item === "Blog"
                  ? router.push("blog")
                  : item === "About"
                  ? router.push("about")
                  : router.push(`/#${item}`);
              }}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="font-semibold flex flex-col items-start  overflow-hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full  hover:cursor-pointer  opacity-85 hover:opacity-100"
              onClick={() => {
                setIsMenuOpen(false);
                item === "Contact"
                  ? router.push("contact")
                  : item === "Blog"
                  ? router.push("blog")
                  : item === "About"
                  ? router.push("about")
                  : router.push(`/#${item}`);
              }}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
