import { TOKEN, USER_LOGIN } from "../../util/Settings/config"
import { GET_THONG_TIN_TAI_KHOAN, LOGIN } from "../Types/Type"

let user = {}
if(localStorage.getItem(USER_LOGIN)){
    user= JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
    userLogin: user,
    thongTinTk:{

    }
}

export const QuanLyTTNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN: {
            let { thongTinNguoiDung } = action
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinNguoiDung))
            localStorage.setItem(TOKEN,thongTinNguoiDung.accessToken)
            return {...state, userLogin:thongTinNguoiDung}
        }
        case GET_THONG_TIN_TAI_KHOAN:{
            return {...state, thongTinTk:action.thongTinTk}
        }
        default:
            return { ...state }
    }
}
