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

  const menuItems = ["About", "Projects", "Blog", "Contact"];

  const router = useRouter();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      isBlurred
      onMenuOpenChange={setIsMenuOpen}
      className="h-[65px] overflow-hidden bg-[#0c0f11] max-w-[920px] mx-auto"
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
                router.push(`/${item.toLocaleLowerCase()}`);
              }}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="font-semibold flex flex-col items-start  overflow-hidden bg-[#0c0f11]">
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
                router.push(`/${item.toLocaleLowerCase()}`);
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
