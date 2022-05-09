import { GROUPID } from "../util/Settings/config";
import { baseService } from "./BaseSevice";

export class QuanLyPhimSevices extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
    LayDanhSachPhim = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    postPhimUploadHinh = (formData) => {
        return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData)
    }
    getThongTinPhim = (idFilm) => {
        return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`)
    }
    capNhatPhimUpLoad = (formData) => {
        return this.post(`api/QuanLyPhim/CapNhatPhimUpload`, formData)
    }
    xoaPhim = (maFilm) => {
        return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maFilm}`)
    }
}

export const qlPhimSevices = new QuanLyPhimSevices();