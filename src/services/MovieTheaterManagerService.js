import { FILMGROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class MovieTheaterManagerService extends baseService {
  constructor() {
    super();
  }

  getInfoMovieTheaterSystem = () => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${FILMGROUPID}`);
  };
}

export const movieTheaterManagerService = new MovieTheaterManagerService();
