import { userManagerService } from "../../services/UserManagerService";
import { LOGIN_ACTION } from "./types/UserManagerType";

export const loginAction = (infoLogin) => {
  return async (dispatch) => {
    try {
      const result = await userManagerService.loginSystem(infoLogin);
      if (result.data.statusCode === 200) {
        dispatch({
          type: LOGIN_ACTION,
          infoLogin: result.data.content,
        });
      }
      console.log("Resul:", result);
    } catch (error) {
      console.log("error", error);
    }
  };
};
