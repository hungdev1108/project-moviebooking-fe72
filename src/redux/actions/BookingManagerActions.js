import { bookingManagerService } from "../../services/BookingManagerService";
import { SET_DETAIL_TICKET_ROOM } from "./types/BookingManagerType";

export const getDetailTicketRoomAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await bookingManagerService.getDetailTicketRoom(maLichChieu);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_DETAIL_TICKET_ROOM,
          detailTicketRoom: result.data.content,
        });
      }
      console.log("Result ticket room:", result);
    } catch (error) {
      console.log("error", error);
    }
  };
};
