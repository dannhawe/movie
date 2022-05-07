import { qlRapPhimSevices } from "../../Services/QuanLyRapPhimSevices"
import { GET_DS_LICH_CHIEU, GET_RAP_PHIM } from "../Types/Type"

export const getDanhSachRapPhim = () => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlRapPhimSevices.layDanhSachRapPhim()
            dispatch({
                type: GET_RAP_PHIM,
                arrRapPhim: result.data.content
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
export const getDanhSachLichChieuPhim = (id) => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlRapPhimSevices.layDanhSachLichChieuPhim(id)
            dispatch({
                type: GET_DS_LICH_CHIEU,
                arrLichChieu: result.data.content
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