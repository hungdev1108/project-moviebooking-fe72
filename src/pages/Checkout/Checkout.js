import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailTicketRoomAction } from "../../redux/actions/BookingManagerActions";
import "./Checkout.css";
import style from "./trapezoid.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { BOOKING_TICKET } from "../../redux/actions/types/BookingManagerType";
import _ from "lodash";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.UserManagerReducer);
  const { detailTicketRoom, listSeatBooking } = useSelector((state) => state.BookingManagerReducer);

  //   console.log("props: ", props);

  console.log("listSeatBooking:", listSeatBooking);

  const dispatch = useDispatch();

  console.log({ detailTicketRoom });

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
            className={`seat font-semibold ${seatVip} ${seatBooked} ${seatSelected}`}
          >
            {seat.daDat ? <CloseOutlined className="text-2xl text-white" /> : seat.stt}
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
            <div className="flex justify-center">
              <div></div>
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
