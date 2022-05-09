import { history } from "../../App"
import { qlThongTinNguoiDung } from "../../Services/QuanLyThonTinNguoiDung"
import { GET_THONG_TIN_TAI_KHOAN, LOGIN } from "../Types/Type"

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