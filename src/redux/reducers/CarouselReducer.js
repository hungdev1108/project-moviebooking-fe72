import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = {
  imgCarousel: [
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      return { ...state, imgCarousel: action.imgCarousel };
    }
    default:
      return { ...state };
  }
};
