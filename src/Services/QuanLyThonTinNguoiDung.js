import { GROUPID } from "../util/Settings/config";
import { baseService } from "./BaseSevice";

export class QuanLyThongTinNguoiDung extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    login = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinNguoiDung)
    }
    DangKy = (formDk) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, formDk)
    }
    ThongTinTaiKhoan = () => {
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
    LayDanhSachNguoiDung = () => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    CapNhatThongTinNguoiDung = (formNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formNguoiDung)
    }
    XoaNguoiDung = (tk) => {
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${tk}`,)
    }
    TimKiemNguoiDung = (tuKhoa) => {
        return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`)
    }


}

export const qlThongTinNguoiDung = new QuanLyThongTinNguoiDung();
