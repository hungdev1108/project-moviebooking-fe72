import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { BookingManagerReducer } from "./reducers/BookingManagerReducer";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmManagerReducer } from "./reducers/FilmManagerReducer";
import { MovieTheaterManagerReducer } from "./reducers/MovieTheaterManagerReducer";
import { UserManagerReducer } from "./reducers/UserManagerReducer";

const rootReducer = combineReducers({
  // State
  CarouselReducer,
  FilmManagerReducer,
  MovieTheaterManagerReducer,
  UserManagerReducer,
  BookingManagerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
