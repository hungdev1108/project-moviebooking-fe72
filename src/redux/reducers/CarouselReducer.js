import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = {
  imgCarousel: [
    {
      maBanner: 1,
      maPhim: 99997,
      hinhAnh: "https://s3img.vcdn.vn/123phim/2020/07/yeu-nhau-mua-e-15949150603140.png",
    },
    {
      maBanner: 2,
      maPhim: 99998,
      hinhAnh: "https://s3img.vcdn.vn/123phim/2020/05/vi-anh-deo-tin-15906776637571.png",
    },
    {
      maBanner: 3,
      maPhim: 99999,
      hinhAnh: "https://s3img.vcdn.vn/123phim/2020/07/ban-dao-15954792351353.jpg",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // case SET_CAROUSEL: {
    //   return { ...state, imgCarousel: action.imgCarousel };
    // }
    default:
      return { ...state };
  }
};
