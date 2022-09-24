import _ from "lodash";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
import { UserOutlined, ExportOutlined, EditOutlined } from "@ant-design/icons";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.UserManagerReducer);
  //   console.log({ userLogin });

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-6 py-3 font-semibold rounded text-gray-700 text-base"
          >
            Sign in
          </button>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className="self-center px-5 py-2 font-semibold rounded bg-orange-600 text-white text-base hover:bg-orange-500"
          >
            <span className="flex justify-center items-center">
              <span className="mr-2">Sign up</span>
              <EditOutlined />
            </span>
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <button
          onClick={() => {
            history.push("/profile");
          }}
          className="self-center px-6 py-3 font-semibold rounded text-gray-800 text-lg"
        >
          <span
            style={{ transition: "all 0.3s" }}
            className="flex justify-center items-center hover:text-orange-600 trans "
          >
            {" "}
            <UserOutlined className="mr-2" />
            <span>{userLogin.taiKhoan}</span>
          </span>
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/home");
            window.location.reload();
          }}
          className="self-center px-5 py-2 font-semibold rounded bg-orange-600 text-white text-base hover:bg-orange-500"
        >
          <span className="flex justify-center items-center">
            <span className="mr-2">Log out</span>
            <ExportOutlined />
          </span>
        </button>
      </Fragment>
    );
  };

  return (
    <header className="py-5 bg-white fixed top-0 left-0 w-full z-10 shadow-lg shadow-black/20 wow animate__animated animate__fadeInDown">
      <div className="container flex justify-between h-6 mx-auto">
        <NavLink to="/" aria-label="Back to homepage" className="flex items-center">
          <img
            src={require("../../../../assets/image/CyberBookingMovie.png")}
            alt="Logo"
            className="w-full"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="#scheduleMovie"
              className="flex items-center px-4 -mb-1 text-base text-gray-700 font-semibold hover:text-orange-600"
            >
              Lịch chiếu
            </a>
          </li>
          <li className="flex">
            <a
              href="#theaterSystem"
              className="flex items-center px-4 -mb-1 text-base text-gray-700 font-semibold hover:text-orange-600"
            >
              Cụm rạp
            </a>
          </li>
          <li className="flex">
            <a
              href="#news"
              className="flex items-center px-4 -mb-1 text-base text-gray-700 font-semibold hover:text-orange-600"
            >
              Tin tức
            </a>
          </li>
          <li className="flex">
            <a
              href="#application"
              className="flex items-center px-4 -mb-1 text-base text-gray-700 font-semibold hover:text-orange-600"
            >
              Ứng dụng
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">{renderLogin()}</div>

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
