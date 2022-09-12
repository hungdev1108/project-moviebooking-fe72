import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";

const rootReducer = combineReducers({
  // State ứng dụng
  CarouselReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
