import React from "react";
import { Link, ScrollLink } from "react-scroll";
import { useState } from "react";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="static w-full max-w-7xl bg-blue-600 rounded-lg">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/*Logo */}
        <div className="font-bold text-3xl cursor-pointer flex items-center gap-1">
          <span className="text-white text-4xl hover:text-blue-900">
            Chinwe Chukwuogor
          </span>
        </div>
        {/*Mobile menu */}
        <div
          onClick={() => setOpen(!open)}
          className="w-8 h-8 right-8 top-6 cursor-pointer md:hidden text-white absolute"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        {/*nav links*/}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-white sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-24" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className={`transition-all duration-500 hover:text-blue-900 ${
                  open ? "text-blue-600" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
