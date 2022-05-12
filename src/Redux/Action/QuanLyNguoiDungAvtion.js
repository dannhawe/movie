import { history } from "../../App";
import { qlThongTinNguoiDung } from "../../Services/QuanLyThonTinNguoiDung";
import { GET_THONG_TIN_TAI_KHOAN, LAY_DANH_SACH_NGUOI_DUNG, LOGIN, TIM_KIEM_NGUOI_DUNG } from "../Types/Type";

export const LoginAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlThongTinNguoiDung.login(thongTinNguoiDung)
            if (result.data.statusCode === 200) {
                console.log(result)
                history.goBack()
                dispatch({
                    type: LOGIN,
                    thongTinNguoiDung: result.data.content
                })
                dispatch({
                    type: "OFF_LOADDING",
                })
            }
        } catch (err) {
            console.log(err)
            dispatch({
                type: "OFF_LOADDING",
            })
        }
    }
}

export const QuanLyNguoiDungAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlThongTinNguoiDung.ThongTinTaiKhoan()
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: GET_THONG_TIN_TAI_KHOAN,
                    thongTinTk: result.data.content
                })
                dispatch({
                    type: "OFF_LOADDING",
                })
            }
        } catch (err) {
            console.log(err)
            dispatch({
                type: "OFF_LOADDING",
            })
        }
    }
}

export const LayDanhSachNguoiDungAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlThongTinNguoiDung.LayDanhSachNguoiDung()
            if (result.data.statusCode === 200) {
                await dispatch({
                    type: LAY_DANH_SACH_NGUOI_DUNG,
                    listNguoiDung: result.data.content
                })
                dispatch({
                    type: "OFF_LOADDING",
                })
            }
        } catch (err) {
            console.log(err.response)
        }
    }
}

export const XoaNguoiDungAction = (tk) => {
    return async (dispatch) => {
        try {
            const result = await qlThongTinNguoiDung.XoaNguoiDung(tk)
            if (result.data.statusCode === 200) {
                alert('Delete is success')

            }
        } catch (err) {
            let error = ''
            err.response?.data.content ? error = err.response?.data.content : error = 'error'
            alert(`${error}`)
        }
    }
}

export const TimKiemNguoiDung = (tuKhoa) => {
    return async (dispatch) => {
        try {
            const result = await qlThongTinNguoiDung.TimKiemNguoiDung(tuKhoa)
            if (result.data.statusCode === 200) {
                console.log(result)
                dispatch({
                    type: TIM_KIEM_NGUOI_DUNG,
                    listNguoiDungTimKiem: result.data.content
                })

            }
        } catch (err) {
            console.log(err.response)
        }
    }
}