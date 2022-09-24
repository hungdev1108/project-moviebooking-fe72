import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUserBookingTicketsAction } from "../../redux/actions/UserManagerActions";
import "./Profile.css";
import { HeartOutlined, SolutionOutlined } from "@ant-design/icons";
import moment from "moment";

export default function Profile() {
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.UserManagerReducer);

  console.log("INFO", infoUser);

  useEffect(() => {
    dispatch(getInfoUserBookingTicketsAction());
  }, []);

  return (
    <div className="profile py-10">
      <div className="container">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-4xl font-semibold title-font text-white mb-12 text-center">MY PROFILE</h1>
            <div className="flex flex-wrap -m-4">
              <div className="px-2 h-96 md:w-2/6 w-full">
                <div className="h-full bg-gray-100 p-6 rounded">
                  <h3 className="text-2xl font-semibold flex items-center">
                    <HeartOutlined className="" />
                    <span className="ml-2 block">INFO USER</span>
                  </h3>
                  <p className="leading-relaxed text-lg mt-2">User name: {infoUser.taiKhoan}</p>
                  <p className="leading-relaxed text-lg">Full name: {infoUser.hoTen}</p>
                  <p className="leading-relaxed text-lg">Phone: {infoUser.soDT}</p>
                  <p className="leading-relaxed text-lg">Email: {infoUser.email}</p>
                  <p className="leading-relaxed text-lg">User type: {infoUser.loaiNguoiDung?.tenLoai}</p>
                </div>
              </div>
              <div className="px-2 h-96 md:w-4/6 w-full ">
                <div className="h-full bg-gray-100 p-6 rounded overflow-y-auto">
                  <h3 className="text-2xl font-semibold flex items-center">
                    <SolutionOutlined />
                    <span className="ml-2 block">HISTORY BOOKING TICKETS</span>
                  </h3>

                  <div className="flex items-center flex-wrap">
                    {infoUser.thongTinDatVe?.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center mr-3">
                          <div className="flex items-center mt-5" key={index}>
                            <img
                              width={107}
                              height={107}
                              alt="testimonial"
                              src={item.hinhAnh}
                              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                              <span className="title-font font-medium text-gray-900">{item.tenPhim}</span>
                              <span className="text-gray-500 text-sm">
                                Booking Date: {moment(item.ngayDat).format("DD-MM-YYYY")}
                              </span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
