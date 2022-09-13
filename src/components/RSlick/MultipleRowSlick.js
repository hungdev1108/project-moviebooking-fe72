import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";

import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

export default class MultipleRowSlick extends Component {
  renderFilms = () => {
    return this.props.lstFilm.map((film, index) => {
      return (
        <div key={index} className={`${styleSlick["width-item"]}`}>
          <Film film={film} />
        </div>
      );
    });
  };

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <h1 className="text-2xl mb-5 text-center">Danh sách phim nổi bật</h1>
        <Slider {...settings}>
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
          {this.renderFilms()}
        </Slider>
      </div>
    );
  }
}
