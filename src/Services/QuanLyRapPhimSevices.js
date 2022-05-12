import { GROUPID } from "../util/Settings/config";
import { baseService } from "./BaseSevice";

export class QuanLyRapPhimSevices extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    layDanhSachRapPhim = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layDanhSachLichChieuPhim = (id) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }
    layThongTinHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`)
    }
    layThongTinCumRapTheoHeThong = (mahtr) => {
        return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${mahtr}`)
    }

}

export const qlRapPhimSevices = new QuanLyRapPhimSevices();
