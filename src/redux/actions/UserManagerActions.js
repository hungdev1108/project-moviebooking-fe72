import { history } from "../../App";
import { userManagerService } from "../../services/UserManagerService";
import { LOGIN_ACTION, SET_INFO_USER_BOOKING } from "./types/UserManagerType";

export const loginAction = (infoLogin) => {
  return async (dispatch) => {
    try {
      const result = await userManagerService.loginSystem(infoLogin);
      if (result.data.statusCode === 200) {
        dispatch({
          type: LOGIN_ACTION,
          infoLogin: result.data.content,
        });
        history.goBack();
      }
      console.log("Login Action:", result);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getInfoUserBookingTicketsAction = () => {
  return async (dispatch) => {
    try {
      const result = await userManagerService.getInfoUserBookingTickets();
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_INFO_USER_BOOKING,
          infoUser: result.data.content,
        });
      }
      console.log("Get info user Action:", result);
    } catch (error) {
      console.log("error", error);
    }
  };
};
