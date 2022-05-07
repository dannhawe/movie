import { baseService } from "./BaseSevice";

export class QuanLyThongTinNguoiDung extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    login = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`,thongTinNguoiDung)
    }
    ThongTinTaiKhoan = () => {
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
   
   
}

export const qlThongTinNguoiDung = new QuanLyThongTinNguoiDung();
