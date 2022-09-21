import { bookingManagerService } from "../../services/BookingManagerService";
import { InfoBooking } from "../../_core/models/InfoBooking";
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
      //   console.log("Result ticket room:", result);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const bookingTicketsAction = (infoBooking = new InfoBooking()) => {
  return async (dispatch) => {
    try {
      const result = await bookingManagerService.bookingTickets(infoBooking);

      //   if (result.data.statusCode === 200) {
      //     dispatch({});
      //   }
      console.log("Result infobooking: ", result.data.content);
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
