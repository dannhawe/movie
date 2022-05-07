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
}

export const qlPhimSevices = new QuanLyPhimSevices();