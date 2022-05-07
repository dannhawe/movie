import { qlDatVeService } from "../../Services/QuanLyDatVeService"
import { GET_DANH_SACH_PHONG_VE } from "../Types/Type"

export const getDanhSachGhe = (maLichChieu) => {
    return async (dispatch) => {
        await dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlDatVeService.LayDanhSachPhongVe(maLichChieu)
            dispatch({
                type: GET_DANH_SACH_PHONG_VE,
                arrPhongVe: result.data.content
            })
            dispatch({
                type: "OFF_LOADDING",
            })
        } catch (err) {
            console.log(err)
            dispatch({
                type: "OFF_LOADDING",
            })
        }
    }
}

export const DatveAction = (ttDatVe) => {
    return async (dispatch) => {
        try {
            await dispatch({
                type: "ON_LOADDING",
            })
            const result = await qlDatVeService.DatVe(ttDatVe)
            {alert('Đặt Vé Thành Công')}
            await dispatch(getDanhSachGhe(ttDatVe.maLichChieu))
            await dispatch({
                type: 'DAT_VE_TANH_CONG'
            })
            await dispatch({
                type: "CHUYEN_TAB"
            })
            dispatch({
                type: "OFF_LOADDING",
            })

        } catch (err) {
            console.log(err.response)
            dispatch({
                type: "OFF_LOADDING",
            })
        }
    }
}

