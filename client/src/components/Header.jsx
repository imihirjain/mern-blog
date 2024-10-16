import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
export default function Header() {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="text-xl lg:text-sm font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-red-200 via-red-400 to-yellow-200 rounded-lg text-white">
            Mihir's
          </span>
          Blog
        </Link>

        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch className="text-xl" />
        </Button>
        <div className="flex gap-3 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/signin">
            <Button gradientDuoTone="redToYellow" outline>
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
