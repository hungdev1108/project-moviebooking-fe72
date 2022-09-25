import { Button, Modal, Space, Statistic } from "antd";
import React from "react";
import { history } from "../../App";

const { Countdown } = Statistic;

export const info = () => {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),

    onOk() {},
  });
};

export const success = () => {
  Modal.success({
    title: "ĐẶT VÉ THÀNH CÔNG",
    content: (
      <h3 className="text-lg text-orange-600">
        HỆ THỐNG SẼ TỰ ĐỘNG CHUYỂN SANG TRANG KẾT QUẢ ĐẶT VÉ SAU:{" "}
        <Countdown onFinish={Date.now() + 5 * 1000} value={Date.now() + 5 * 1000} format="mm:ss" />
      </h3>
    ),
  });
};

export const registerSuccess = () => {
  Modal.success({
    title: "Đăng ký tài khoản thành công",
    content: "ĐĂNG KÝ TÀI KHOẢN THÀNH CÔNG",
    onOk() {
      history.push("/login");
    },
  });
};

export const registerError = (noti) => {
  Modal.error({
    title: "Đăng ký tài khoản không thành công",
    content: noti,
    onOk() {},
  });
};

export const error = () => {
  Modal.error({
    title: "ĐẶT VÉ KHÔNG THÀNH CÔNG",
    content: "VUI LÒNG CHỌN GHẾ ĐỂ TIẾN HÀNH ĐẶT VÉ",
    onOk() {},
  });
};

export const warning = () => {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages...",
  });
};
