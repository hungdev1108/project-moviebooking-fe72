import React from "react";
import { Col, Row, Tabs } from "antd";
import { useSelector } from "react-redux";
import "./HomeNews.css";

const { TabPane } = Tabs;

export default function HomeNews() {
  return (
    <div className="HomeNews" id="news">
      {" "}
      <div className="container mt-10 w-full bg-white px-5 py-5">
        <Tabs defaultActiveKey="1" centered>
          <TabPane
            className="text-"
            tab={
              <span className=" font-semibold" style={{ fontSize: 24 }}>
                Điện ảnh 24h
              </span>
            }
            key="1"
            style={{ minHeight: 300 }}
          >
            <div className="new_film24h--1">
              <Row gutter={[30, 30]}>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/latmatThumb.jpg")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất
                  </a>
                  <p className="text-md mt-2">
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans
                    hâm mộ.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={12}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/mortal_kombat.jpg")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600">
                    [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA
                    GAME ĐÌNH ĐÁM
                  </a>
                  <p className="text-md mt-2">
                    Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác
                    phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi
                    điện tử.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
              </Row>
            </div>
            <div className="new_film24h-- mt-10">
              <Row gutter={[30, 30]}>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/CA1.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời
                  </a>
                  <p className="text-md mt-2">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho
                    vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô
                    Gái Trẻ Hứa Hẹn).
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <img
                    className="bg-cover object-cover rounded-md bg-center w-full"
                    src={require("../../../assets/thumnail/CA2.png")}
                    alt=""
                  />
                  <a href="" className="text-xl font-semibold mt-3 block hover:text-orange-600 uppercase">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ
                    EM
                  </a>
                  <p className="text-md mt-2">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo
                    Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn
                    sẽ làm cho hội chị em phải mê mẩn vào tháng tới.
                  </p>
                  <span className="text-black opacity-70 mt-2 block text-xl">
                    <i
                      className="fa fa-thumbs-o-up hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-comment-o ml-5 hover:text-orange-600 cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Col>
                <Col span={8}>
                  <Row gutter={[5, 5]}>
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/km2.png")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="m-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành chuẩn xì tai Sài Gòn.
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/km3.png")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu.
                      </a>
                    </Col>
                  </Row>
                  <Row gutter={[5, 5]} className="mt-5">
                    <Col span={8}>
                      <img
                        className="rounded-md bg-center w-13 bg-cover object-cover"
                        src={require("../../../assets/thumnail/km4.jpg")}
                        alt=""
                      />
                    </Col>
                    <Col span={16}>
                      {" "}
                      <a href="" className="ml-2 text-md font-semibold mt-3 block hover:text-orange-600">
                        Ngô Thanh Vân chính thức khởi động cuộc thi thiết kế trang phục cho siêu anh hùng đầu
                        tiên của Việt Nam.
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div className="seemore flex justify-center">
              <button className="block py-2 px-8 rounded-md mt-5 border btn_seemore text-md font-semibold cursor-pointer">
                XEM THÊM
              </button>
            </div>
          </TabPane>

          <TabPane
            className="text-"
            tab={
              <span className=" font-semibold" style={{ fontSize: 24 }}>
                Reviews
              </span>
            }
            key="2"
            style={{ minHeight: 300 }}
          >
            Thông tin
          </TabPane>

          <TabPane
            className="text-"
            tab={
              <span className=" font-semibold" style={{ fontSize: 24 }}>
                Khuyến mãi
              </span>
            }
            key="3"
            style={{ minHeight: 300 }}
          >
            Đánh giá
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
