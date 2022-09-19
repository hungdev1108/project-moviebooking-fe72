import React, { Fragment, useState } from "react";
import { Select, Tabs } from "antd";
import { memo } from "react";
import moment from "moment";
import "./HomeMenu.css";

const { TabPane } = Tabs;

function HomeMenu(props) {
  const [tabPosition, setTabPosition] = useState("left");
  console.log("MovieTheater", props.movieTheaterSystem);

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  const renderMovieTheaterSystem = () => {
    return props.movieTheaterSystem.map((movieTheaterSys, index) => {
      return (
        <>
          <TabPane key={index} tab={<img src={movieTheaterSys.logo} className="rounded-full w-16" alt="" />}>
            <Tabs
              tabPosition={tabPosition}
              style={{ maxHeight: 600, overflowY: "hidden", overflowX: "hidden" }}
            >
              {movieTheaterSys.lstCumRap.map((cinePlex, index) => {
                return (
                  <TabPane
                    style={{ maxHeight: 600, overflowY: "auto", overflowX: "hidden" }}
                    key={index}
                    tab={
                      <div className="flex justify-center items-center">
                        <div className="text-left ml-3">
                          <h4 className="font-semibold text-[16px] text-[#8bc541]">{cinePlex.tenCumRap}</h4>
                          {cinePlex.diaChi.length > 40 ? (
                            <p className="text-gray-600">{cinePlex.diaChi.slice(0, 40)}...</p>
                          ) : (
                            <p className="text-gray-600">{cinePlex.diaChi}</p>
                          )}
                          <p className="text-red-500">[Chi tiết]</p>
                        </div>
                      </div>
                    }
                  >
                    {/* Load film of cinePlex */}
                    {cinePlex.danhSachPhim?.map((film, index) => {
                      return (
                        <Fragment key={index}>
                          <div className="my-4 flex items-center overscroll-y-auto">
                            <div className="">
                              <img style={{ width: "50px" }} src={film.hinhAnh} alt={film.tenPhim} />
                            </div>

                            <div className="ml-4">
                              <h3 className="font-semibold text-[16px] text-gray-800">{film.tenPhim}</h3>
                              <p></p>
                              <div className="grid grid-cols-3 gap-3 mt-3">
                                {film.lstLichChieuTheoPhim?.slice(0, 12).map((movieSchedule, index) => {
                                  return (
                                    <a
                                      href="/home"
                                      className="hover:text-orange-600 font-semibold text-[#108F3E] text-[14px] bg-gray-100 px-1 py-1 border rounded-md text-center"
                                      key={index}
                                    >
                                      {moment(movieSchedule.ngayChieuGioChieu).format("DD-MM-YYYY ~ LT")}
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Fragment>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </TabPane>
        </>
      );
    });
  };

  return (
    <>
      {/* <div className="mb-5" id="featuredMovies">
        <h1 className="text-3xl font-semibold text-center text-black opacity-70"></h1>
      </div> */}
      <div className="mb-16 movie_schedule" id="theaterSystem">
        <Tabs tabPosition={tabPosition}>{renderMovieTheaterSystem()}</Tabs>
      </div>
    </>
  );
}

export default memo(HomeMenu);
