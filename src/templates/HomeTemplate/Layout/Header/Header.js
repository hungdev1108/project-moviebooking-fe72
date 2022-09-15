import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="py-5 bg-white fixed w-full z-10 shadow-lg shadow-black/20">
      <div className="container flex justify-between h-6 mx-auto ">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
          s
        >
          <img
            src={require("../../../../assets/image/CyberBookingMovie.png")}
            alt="Logo"
            className="w-full"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 -mb-1 text-base text-gray-700 font-semibold hover:text-orange-600"
              activeClassName="border-b-2 border-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/contact"
              className="flex items-center px-4 -mb-1 text-base text-gray-700 font-semibold hover:text-orange-600"
              activeClassName="border-b-2 border-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/news"
              className="flex items-center px-4 -mb-1 text-base text-gray-700 font-semibold hover:text-orange-600"
              activeClassName="border-b-2 border-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 font-semibold rounded text-gray-700 text-base">
            Sign in
          </button>
          <button className="self-center px-8 py-2 font-semibold rounded bg-orange-600 text-white text-base hover:bg-orange-500">
            Sign up
          </button>
        </div>
        <button className="p-1 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-600 "
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
