import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import _ from "lodash";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingTicketsAction, getDetailTicketRoomAction } from "../../redux/actions/BookingManagerActions";
import { BOOKING_TICKET } from "../../redux/actions/types/BookingManagerType";
import { InfoBooking } from "../../_core/models/InfoBooking";
import "./Checkout.css";
import style from "./trapezoid.module.css";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.UserManagerReducer);
  const { detailTicketRoom, listSeatBooking } = useSelector((state) => state.BookingManagerReducer);

  console.log(userLogin);
  console.log(listSeatBooking);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailTicketRoomAction(props.match.params.id));
  }, []);

  const { thongTinPhim, danhSachGhe } = detailTicketRoom;

  const renderSeats = () => {
    return danhSachGhe?.map((seat, index) => {
      let seatVip = seat.loaiGhe === "Vip" ? "seat__vip" : "";
      let seatBooked = seat.daDat === true ? "seat__booked" : "";
      let seatSelected = "";

      let indexSeatBooking = listSeatBooking.findIndex((seatBooking) => seatBooking.maGhe === seat.maGhe);

      if (indexSeatBooking !== -1) {
        seatSelected = "seat__selected";
      }

      let mySeatBooked = "";

      if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        mySeatBooked = "my__seat--booked";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: BOOKING_TICKET,
                selectedSeat: seat,
              });
            }}
            disabled={seat.daDat}
            className={`seat font-semibold ${seatVip} ${seatBooked} 
            ${seatSelected} ${mySeatBooked}`}
          >
            {seat.daDat ? (
              mySeatBooked !== "" ? (
                <UserOutlined className="text-xl text-white" />
              ) : (
                <CloseOutlined className="text-2xl text-white" />
              )
            ) : (
              seat.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="checkout">
      <div className="px-28 min-h-screen py-8 animate__animated animate__backInDown">
        <div className="grid grid-cols-12 checkout__content rounded-md">
          <div className="col-span-8">
            {/* NOTE */}
            <div className="mt-3 flex justify-center">
              <table className="divide-y divide-gray-100 w-2/3">
                <thead className="">
                  <tr className="flex justify-between items-center py-1">
                    <th>
                      <div className="flex">
                        <button className="mini__seat text-center mr-2">00</button>
                        <span>Ghế trống</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat seat__selected mr-2">00</button>
                        <span>Ghế đang đặt</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat seat__booked text-center mr-2">
                          <CloseOutlined className="text-md text-white" />
                        </button>
                        <span>Ghế đã đặt</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat seat__vip text-center mr-2">00</button>
                        <span>Ghế đã ghế vip</span>
                      </div>
                    </th>
                    <th>
                      <div className="flex">
                        <button className="mini__seat my__seat--booked text-center mr-2">
                          <UserOutlined className="text-md text-white" />
                        </button>
                        <span>Ghế của tôi</span>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <div className={style.trapezoid}>
                <h3 className="text-lg text-center font-semibold text-white my-1">MÀN HÌNH</h3>
              </div>
            </div>
            <div className="text-center ml-4">
              <div className="listSeat mt-10 mx-auto">{renderSeats()}</div>
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-black text-center text-3xl mb-2 font-semibold">
              Tổng tiền:{" "}
              {listSeatBooking
                ?.reduce((total, seatSelected, index) => {
                  return (total += seatSelected.giaVe);
                }, 0)
                .toLocaleString()}
              đ
            </h3>
            <hr />

            <div className="my-4">
              <h3 className="text-2xl text-orange-700 font-semibold mb-2">{thongTinPhim?.tenPhim}</h3>
              <p className="my-1 text-lg font-semibold"> {thongTinPhim?.tenCumRap}</p>
              <p className="text-lg font-semibold">
                Thời gian: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} ({thongTinPhim?.tenRap})
              </p>
              <p className="my-1 text-lg font-semibold">Địa chỉ: {thongTinPhim?.diaChi}</p>
            </div>
            <hr />

            <div className="flex flex-row justify-between my-4">
              <div className="">
                <span className="text-orange-600 text-xl font-semibold block">
                  Ghế chọn:{" "}
                  {_.sortBy(listSeatBooking, ["stt"])?.map((seatBooking, index) => {
                    return (
                      <button
                        key={index}
                        disabled={true}
                        className="ml-2 px-1 mb-2 bg-orange-600 text-white rounded-md"
                      >
                        {seatBooking.stt}
                      </button>
                    );
                  })}
                </span>
              </div>
              <div className="">
                <span className="text-black text-xl font-semibold">
                  {listSeatBooking
                    ?.reduce((total, seatSelected, index) => {
                      return (total += seatSelected.giaVe);
                    }, 0)
                    .toLocaleString()}
                  đ
                </span>
              </div>
            </div>
            <hr />

            <div className="my-4">
              <span className="text-gray-700 text-lg font-semibold">E-Mail</span>
              <p className="text-[18px] font-medium ">{userLogin.email}</p>
            </div>
            <hr />

            <div className="my-4">
              <span className="text-gray-700 text-lg font-semibold">Số điện thoại</span>
              <p className="text-[18px] font-medium ">{userLogin.soDT}</p>
            </div>
            <hr />

            <div className="my-4 flex flex-row justify-between">
              <div className="inputTicket">
                <span className="text-gray-700 font-semibold text-md block">Mã giảm giá</span>
                <input
                  className="text-[14px] font-semibold text-orange-700 mt-3 ring-1 ring-gray-400 focus:outline-none uppercase focus:ring-orange-600 rounded-sm px-4 py-2"
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
            <div className="mb-3">
              <span className="text-[14px] text-red-600 font-semibold text-center block">
                *Lưu ý: Mã giảm giá chỉ áp cho lần đầu đặt vé tại CyberBooking
              </span>
            </div>

            <hr />

            <div className="mt-5">
              <button
                onClick={() => {
                  const infoBooking = new InfoBooking();
                  infoBooking.maLichChieu = props.match.params.id;
                  infoBooking.danhSachVe = listSeatBooking;

                  console.log(infoBooking);

                  dispatch(bookingTicketsAction(infoBooking));
                }}
                className="bg-orange-600 block py-3 px-16 rounded-md film__card-btn mt-5 mx-auto"
              >
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
