import React from "react";
import { useFormik } from "formik";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/UserManagerActions";

export default function Login(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      dispatch(loginAction(values));

      console.log(values);
    },
  });

  return (
    <section className="bg-gray-50 login">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 animate__animated animate__backInDown ">
        <a
          href="/home"
          className="block items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            style={{ width: "30%", margin: "auto" }}
            src={require("../../assets/Login-Logo.png")}
            alt="logo"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Sign in to your account
            </h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                formik.handleSubmit(event);
              }}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  name="taiKhoan"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={formik.handleChange}
                  type="password"
                  name="matKhau"
                  id="password"
                  placeholder="Enter your password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="/login"
                  className="text-sm font-medium text-white hover:underline hover:text-orange-600"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white hover:bg-orange-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-600"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <NavLink
                  to="/register"
                  className="font-medium text-white hover:underline hover:text-orange-600"
                >
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
