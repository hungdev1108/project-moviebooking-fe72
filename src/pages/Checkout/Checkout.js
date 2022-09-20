import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailTicketRoomAction } from "../../redux/actions/BookingManagerActions";
import "./Checkout.css";
import style from "./trapezoid.module.css";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.UserManagerReducer);
  const { detailTicketRoom } = useSelector((state) => state.BookingManagerReducer);

  const dispatch = useDispatch();

  console.log({ detailTicketRoom });

  useEffect(() => {
    dispatch(getDetailTicketRoomAction(props.match.params.id));
  }, []);

  return (
    <div className="checkout">
      <div className="container min-h-screen py-10 animate__animated animate__backInDown">
        <div className="grid grid-cols-12 checkout__content rounded-md">
          <div className="col-span-8">
            <div className="flex justify-center">
              <div></div>
              <div className={style.trapezoid}>
                <div>
                  <h3 className="text-lg text-center font-semibold text-white my-1">MÀN HÌNH</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-black text-center text-3xl mb-2 font-semibold">Tổng tiền: 0đ</h3>
            <hr />

            <div className="my-4">
              <h3 className="text-2xl text-orange-700 font-semibold mb-2">
                {detailTicketRoom.thongTinPhim?.tenPhim}
              </h3>
              <p className="my-1 text-lg font-semibold"> {detailTicketRoom.thongTinPhim?.tenCumRap}</p>
              <p className="text-lg font-semibold">
                Thời gian: {detailTicketRoom.thongTinPhim?.ngayChieu} -{" "}
                {detailTicketRoom.thongTinPhim?.gioChieu} ({detailTicketRoom.thongTinPhim?.tenRap})
              </p>
              <p className="my-1 text-lg font-semibold">Địa chỉ: {detailTicketRoom.thongTinPhim?.diaChi}</p>
            </div>
            <hr />

            <div className="flex flex-row justify-between my-4">
              <div className="">
                <span className="text-orange-600 text-xl font-semibold block">
                  Ghế chọn:{" "}
                  <button className="ml-1 px-2 py-1 bg-orange-600 text-white rounded-md">C18</button>
                  <button className="ml-1 px-2 py-1 bg-orange-600 text-white rounded-md">C19</button>
                </span>
              </div>
              <div className="">
                <span className="text-black text-xl font-semibold">0đ</span>
              </div>
            </div>
            <hr />

            <div className="my-4">
              <span className="text-gray-700 text-lg font-semibold">E-Mail</span>
              <p className="text-[18px] font-medium mt-1">{userLogin.email}</p>
            </div>
            <hr />

            <div className="my-4">
              <span className="text-gray-700 text-lg font-semibold">Số điện thoại</span>
              <p className="text-[18px] font-medium mt-1">{userLogin.soDT}</p>
            </div>
            <hr />

            <div className="my-4 flex flex-row justify-between">
              <div className="inputTicket">
                <span className="text-gray-600 font-semibold block">Mã giảm giá</span>
                <input
                  className="text-[14px] font-semibold mt-3 ring-1 ring-gray-400 focus:outline-none focus:ring-orange-600 rounded-sm px-4 py-2"
                  placeholder="Nhập tại đây...."
                />
              </div>
              <div className="ticket">
                <img
                  className="img-ticket block drop-shadow-lg"
                  src={require("../../assets/ticket-movie.png")}
                  alt="ticket-movie"
                />
              </div>
            </div>
            <hr />

            <div className="mt-5">
              <button className="bg-orange-600 block py-3 px-16 rounded-md film__card-btn mt-5 mx-auto">
                <a className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer">
                  ĐẶT VÉ
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
