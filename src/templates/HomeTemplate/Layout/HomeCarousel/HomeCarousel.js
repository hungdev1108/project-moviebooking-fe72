import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";

export default function HomeCarousel(props) {
  const { imgCarousel } = useSelector((state) => state.CarouselReducer);

  const renderImg = () => {
    const contentStyle = {
      height: "600px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      objectFit: "cover",
    };

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

  return <Carousel autoplay>{renderImg()}</Carousel>;
}
