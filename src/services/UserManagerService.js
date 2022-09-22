import { FILMGROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class UserManagerService extends baseService {
  constructor() {
    super();
  }

  loginSystem = (infoLogin) => {
    // {taikhoan: "", matKhau: ""}
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, infoLogin);
  };

  getInfoUserBookingTickets = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
}

export const userManagerService = new UserManagerService();
