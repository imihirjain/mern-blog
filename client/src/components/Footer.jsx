import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export default function FooterComp() {
  return (
    <div className="w-full h-full">
      <Footer className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white ml-5"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-red-200 via-red-400 to-yellow-200 rounded-lg text-white">
                  TechTonic
                </span>
                Blog
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div className="ml-5">
                <Footer.Title title="About" className="font-bold" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://portfolio-mihirjain.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TechTonic's Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="ml-5">
                <Footer.Title title="Follow Us" className="font-bold" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/imihirjain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link
                    href="https://www.linkedin.com/in/mihir-jain-583633213"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Footer.Link>
                  <Footer.Link
                    href="https://www.instagram.com/imihirjain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="ml-5">
                <Footer.Title title="Legal" className="font-bold" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/about">Privacy Policy</Footer.Link>
                  <Footer.Link href="/projects">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              className="mb-7 ml-5"
              href="#"
              by="TechTonic's Blog"
              year={new Date().getFullYear()}
            />
            <div className="flex gap-6 ml-5 sm:mt-0 mb-7 sm:justify-center ">
              <Footer.Icon
                href="https://www.linkedin.com/in/mihir-jain-583633213"
                icon={BsLinkedin}
              />
              <Footer.Icon
                href="https://www.instagram.com/imihirjain"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://github.com/imihirjain"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
