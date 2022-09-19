import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
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
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
