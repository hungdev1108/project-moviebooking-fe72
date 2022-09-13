import React from "react";
import "./Film.css";
import { PlayCircleOutlined } from "@ant-design/icons";

export default function Film(props) {
  const { film } = props;

  return (
    <div className="mr-3 h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-10 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          background: `url(${film.hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          position: "relative",
        }}
      >
        <img src={film.hinhAnh} alt={film.tenPhim} className="opacity-0 w-full " style={{ height: "350px" }} />
        {/* play trailer */}
        <div
          className="w-full h-full"
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.4)",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div className="rounded-full cursor-pointer">
              <PlayCircleOutlined style={{ fontSize: "60px", color: "white" }} />
            </div>
          </div>
        </div>
        {/* play trailer */}
      </div>

      <h1 className="title-font sm:text-xl text-xl font-medium text-gray-900 mt-4 h-8">
        {film.tenPhim.length > 100 ? <>{film.tenPhim.slice(0, 60)} ...</> : <>{film.tenPhim}</>}
      </h1>
      <p className="leading-relaxed mt-6 mb-3 h-16">
        {film.moTa.length > 100 ? <span>{film.moTa.slice(0, 100)} ...</span> : <span>{film.moTa}</span>}
      </p>
      <button className="bg-orange-600 block w-full py-1 rounded-sm btnBookingTick">
        <a className="text-white bookingTick font-semibold inline-flex items-center text-lg hover:opacity-[0.8] cursor-pointer">
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
