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
   
        return this.post(`api/QuanLyDatVe/DatVe`,ttDatVe)
    }
  
}

export const qlDatVeService = new QuanLyDatVeService();