import { baseService } from "./BaseSevice";

export class QuanLyDatVeService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    LayDanhSachPhongVe = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

    DatVe = (ttDatVe) => {

        return this.post(`api/QuanLyDatVe/DatVe`, ttDatVe)
    }
    TaoLichChieu = (lichChieu) => {

        return this.post(`api/QuanLyDatVe/TaoLichChieu`, lichChieu)
    }

}

export const qlDatVeService = new QuanLyDatVeService();