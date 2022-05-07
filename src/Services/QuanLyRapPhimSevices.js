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
    layDanhSachLichChieuPhim =(id)=>{
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }
   
}

export const qlRapPhimSevices = new QuanLyRapPhimSevices();
