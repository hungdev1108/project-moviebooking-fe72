import { filmManagerService } from "../../services/FilmManagerService";
import { SET_LIST_FILM } from "./types/FilmManagerType";

export const getListFilmAction = () => {
  return async (dispatch) => {
    try {
      const result = await filmManagerService.getListFilm();
      dispatch({
        type: SET_LIST_FILM,
        lstFilm: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
