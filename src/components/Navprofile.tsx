import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";
import Whatsapp from "./icons/Whatsapp";
import Image from "next/image";

export default function Navprofile() {
  const [navbarBlur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar isBlurred={false} className={navbarBlur ? "blurred" : "trans"}>
      <NavbarBrand className="flex cursor-default">
        <Image
          alt="heh"
          src="/favicon.png"
          width={1000}
          height={1000}
          className="w-10 pr-1"
        />
        <p> AYOUB</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="md:text-xl text-lg hover:-translate-y-1 hover:transition ease-out hover:scale-110 hover:font-semibold md:pr-3 hover:border-b-violet-600 hover:border-b-2 hover:text-violet-500"
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="md:text-xl text-lg hover:translate-y-1 hover:transition ease-out hover:scale-110 hover:font-semibold md:pr-3 hover:border-b-violet-600 hover:border-b-2 hover:text-violet-500"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="md:text-xl text-lg hover:-translate-y-1 hover:transition ease-out hover:scale-110 hover:font-semibold md:pr-3 hover:border-b-violet-600 hover:border-b-2 hover:text-violet-500"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="md:text-xl text-lg hover:translate-y-1 hover:transition ease-out hover:scale-110 hover:font-semibold md:pr-3 hover:border-b-violet-600 hover:border-b-2 hover:text-violet-500"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Ayoub Markhouss"
              size="md"
              src="/ayoub.jpeg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem>
              <Link
                className="flex"
                about="email"
                href="https://www.linkedin.com/in/ayoub-markhouss/"
              >
                <Linkedin className="w-6" />
                <p className="font-semibold text-white pl-2">Linkedin</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                className="flex"
                about="email"
                href="https://www.instagram.com/markos_________/"
              >
                <Instagram className="w-6" />
                <p className="font-semibold text-white pl-2">Instagram</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link about="email" href="https://wa.me/212645353257">
                <Whatsapp className="w-6" />
                <p className="font-semibold text-white pl-2">WhatsApp</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
