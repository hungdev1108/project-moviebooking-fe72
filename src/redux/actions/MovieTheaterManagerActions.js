import { movieTheaterManagerService } from "../../services/MovieTheaterManagerService";
import { SET_CINEMA_SYSTEM } from "./types/MovieTheaterManagerType";

export const getListCinemaSystem = () => {
  return async (dispatch) => {
    try {
      const result = await movieTheaterManagerService.getInfoMovieTheaterSystem();
      if (result.status === 200) {
        dispatch({
          type: SET_CINEMA_SYSTEM,
          movieTheaterSystem: result.data.content,
        });
      }
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
