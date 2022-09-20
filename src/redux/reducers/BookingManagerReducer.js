import { SET_DETAIL_TICKET_ROOM } from "../actions/types/BookingManagerType";

const stateDefault = {
  detailTicketRoom: {},
};

export const BookingManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DETAIL_TICKET_ROOM: {
      return { ...state, detailTicketRoom: action.detailTicketRoom };
    }

    default: {
      return { ...state };
    }
  }
};
