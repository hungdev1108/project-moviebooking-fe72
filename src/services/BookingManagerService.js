import { FILMGROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class BookingManagerService extends baseService {
  constructor() {
    super();
  }

  getDetailTicketRoom = (maLichChieu) => {
    // {maLichChieu}
    return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  };
}

export const bookingManagerService = new BookingManagerService();
