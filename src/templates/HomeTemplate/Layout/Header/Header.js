import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className=" p-4 bg-black text-white bg-opacity-30 fixed w-full z-10">
      <div className="container flex justify-between h-8 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-white"
        >
          <img src={require("../../../../assets/image/CyberBookingMovie.png")} alt="Logo" className="w-full" />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 -mb-1 text-base text-white font-semibold"
              activeClassName="border-b-2 border-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/contact"
              className="flex items-center px-4 -mb-1 text-base text-white font-semibold"
              activeClassName="border-b-2 border-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/news"
              className="flex items-center px-4 -mb-1 text-base text-white font-semibold"
              activeClassName="border-b-2 border-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 font-semibold rounded text-white text-[16px]">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-orange-600 text-white text-[16px]">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
