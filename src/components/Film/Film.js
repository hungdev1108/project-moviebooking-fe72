import React from "react";
import "./Film.css";
import { PlayCircleOutlined } from "@ant-design/icons";

export default function Film(props) {
  const { film } = props;

  return (
    <div className="mx-2 mt-3 relative text-center">
      <div className="overflow-hidden drop-shadow-xl rounded-lg film__card cursor-pointer">
        <div
          className="pb-10 film__card-hover"
          style={{
            height: "100%",
            backgroundImage: `url(${film.hinhAnh})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            position: "relative",
          }}
        >
          <img
            src={film.hinhAnh}
            alt={film.tenPhim}
            className="opacity-0 overflow-hidden"
            style={{ height: "350px" }}
          />
        </div>
        {/* play trailer */}
        <div className="film__card-overlay">
          <div className="rounded-full cursor-pointer">
            <PlayCircleOutlined className="film__card-playicon" />
          </div>
        </div>
        {/* play trailer */}
      </div>

      <h1 className="title-font sm:text-lg text-lg font-medium text-gray-900 mt-4 h-15">
        {film.tenPhim.length > 50 ? <>{film.tenPhim.slice(0, 30)} ...</> : <>{film.tenPhim}</>}
      </h1>
      {/* <p className="leading-relaxed mt-6 mb-3 h-16">
        {film.moTa.length > 100 ? <span>{film.moTa.slice(0, 100)} ...</span> : <span>{film.moTa}</span>}
      </p> */}
      <button className="bg-orange-600 block w-full py-1 rounded-sm film__card-btn mt-3">
        <a className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer">
          ĐẶT VÉ
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </button>
    </div>
  );
}
