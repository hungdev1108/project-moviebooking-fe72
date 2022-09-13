import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmManagerReducer } from "./reducers/FilmManagerReducer";

const rootReducer = combineReducers({
  // State ứng dụng
  CarouselReducer,
  FilmManagerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
