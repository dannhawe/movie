import { TOKEN, USER_LOGIN } from "../../util/Settings/config"
import { GET_THONG_TIN_TAI_KHOAN, LAY_DANH_SACH_NGUOI_DUNG, LOGIN, TIM_KIEM_NGUOI_DUNG } from "../Types/Type"

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
    userLogin: user,
    thongTinTk: {},
    listNguoiDung: [],
    listNguoiDungTimKiem: ["æ"],
}

export const QuanLyTTNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN: {
            let { thongTinNguoiDung } = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinNguoiDung))
            localStorage.setItem(TOKEN, thongTinNguoiDung.accessToken)
            return { ...state, userLogin: thongTinNguoiDung }
        }
        case GET_THONG_TIN_TAI_KHOAN: {
            return { ...state, thongTinTk: action.thongTinTk }
        }
        case LAY_DANH_SACH_NGUOI_DUNG: {
            return { ...state, listNguoiDung: action.listNguoiDung }
        }
        case TIM_KIEM_NGUOI_DUNG: {
            return { ...state, listNguoiDungTimKiem: action.listNguoiDungTimKiem }
        }
        default:
            return { ...state }
    }
}
