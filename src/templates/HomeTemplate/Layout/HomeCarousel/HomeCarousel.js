import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions";
import "./HomeCarousel.css";

export default function HomeCarousel(props) {
  const { imgCarousel } = useSelector((state) => state.CarouselReducer);
  console.log(imgCarousel);
  const dispatch = useDispatch();

  const contentStyle = {
    height: "600px",
    color: "#fff",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    objectFit: "cover",
    // backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const renderImg = () => {
    return imgCarousel.map((item, index) => {
      return (
        <div key={index}>
          <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
            <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="relative top-[64px]">
      <Carousel autoplay>{renderImg()}</Carousel>
    </div>
  );
}
