import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./circle.css";
import { Rate, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILM_DETAIL } from "../../redux/actions/types/MovieTheaterManagerType";
import { getInfoFilmDetail } from "../../redux/actions/MovieTheaterManagerActions";
import moment from "moment";

const { TabPane } = Tabs;

//random IDMB
Math.randomDec = function (min, max, decimals) {
  return (Math.random() * (max - min) + min).toFixed(decimals || 2);
};

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.FilmManagerReducer.filmDetail);

  console.log("CHITIETFILM: ", { filmDetail });
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getInfoFilmDetail(id));
  }, []);

  return (
    <div
      className="mt-[64px]"
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <CustomCard
        className="min-h-screen"
        effectColor="#000" // required
        // color="#fff" // default color is white
        blur={15} // default blur value is 10px
        borderRadius={0}
      >
        <div className="grid grid-cols-12 mt-20">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-2">
              <img className="rounded-md" src={filmDetail.hinhAnh} alt={filmDetail.tenPhim} />
              <div className="ml-4" style={{ margin: "auto", marginLeft: "10%" }}>
                <div className="font-semibold text-lg">
                  Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format("MM-DD-YYYY")}
                </div>
                <h3 className="text-3xl mt-3 font-bold text-white">{filmDetail.tenPhim}</h3>
                <h3 className="text-xl mt-3 font-bold text-white">
                  120 phút - {Math.randomDec(4, 10, 2)} IMDb - 2D/Digitals
                </h3>
                <button className="bg-orange-600 block py-3 px-8 rounded-md film__card-btn mt-5">
                  <a className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer">
                    MUA VÉ
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 col-start-8 mt-10">
            <div className="flex flex-col justify-center items-center">
              <div className={`c100 p${filmDetail.danhGia * 10} green`}>
                <span>{filmDetail.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="font-semibold text-xl mt-3">Đánh giá</div>
              <h2 className="text-2xl top-6">
                <Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: "#ea580c" }} />
              </h2>
            </div>
          </div>
        </div>

        <div className="container mt-20 ml-72 w-2/3 bg-white px-5 py-5 rounded-md">
          <Tabs
            defaultActiveKey="1"
            centered
            style={{ maxHeight: 600, overflowY: "auto", overflowX: "hidden" }}
          >
            <TabPane
              tab={<span style={{ fontSize: 18, color: "fff" }}>Lịch chiếu</span>}
              key="1"
              style={{ minHeight: 300 }}
            >
              <div>
                <Tabs tabPosition="left">
                  {filmDetail.heThongRapChieu?.map((theaterSys, index) => {
                    return (
                      <TabPane
                        key={index}
                        tab={
                          <img
                            src={theaterSys.logo}
                            className="rounded-full w-16 drop-shadow-lg"
                            alt={theaterSys.tenHeThongRap}
                          />
                        }
                        style={{ maxHeight: 600, overflowY: "auto", overflowX: "hidden" }}
                      >
                        {theaterSys.cumRapChieu?.map((cinema, index) => {
                          return <div key={index}></div>;
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>

            <TabPane
              className="text-"
              tab={<span style={{ fontSize: 18, color: "fff" }}>Thông tin</span>}
              key="2"
              style={{ minHeight: 300 }}
            >
              Thông tin
            </TabPane>

            <TabPane
              className="text-"
              tab={<span style={{ fontSize: 18, color: "fff" }}>Đánh giá</span>}
              key="3"
              style={{ minHeight: 300 }}
            >
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
