import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmManagerReducer } from "./reducers/FilmManagerReducer";
import { MovieTheaterManagerReducer } from "./reducers/MovieTheaterManagerReducer";

const rootReducer = combineReducers({
  // State ứng dụng
  CarouselReducer,
  FilmManagerReducer,
  MovieTheaterManagerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
