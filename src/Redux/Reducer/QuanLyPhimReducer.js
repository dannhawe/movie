import { GET_LIST_PHIM, GET_PHIM_DANG_CHIEU, GET_PHIM_SAP_CHIEU, GET_THONG_TIN_FILM } from "../Types/Type"

const stateDefault = {
    arrFilm: [

    ],
    arrFilmDefault: [

    ],
    thongTinFilm: {}


}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_LIST_PHIM: {
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = action.arrFilm
            return { ...state }
        }

        case GET_PHIM_DANG_CHIEU: {
            let arr = state.arrFilmDefault.filter(item => item.dangChieu === true)
            return { ...state, arrFilm: arr }
        }
        case GET_PHIM_SAP_CHIEU: {
            let arr = state.arrFilmDefault.filter(item => item.sapChieu === true)
            return { ...state, arrFilm: arr }
        }
        case GET_THONG_TIN_FILM: {
            return { ...state, thongTinFilm: action.thongTinFilm }
        }

        default: return { ...state }
    }
}

