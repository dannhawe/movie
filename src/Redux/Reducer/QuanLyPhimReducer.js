import { GET_LIST_PHIM, GET_PHIM_DANG_CHIEU, GET_PHIM_SAP_CHIEU } from "../Types/Type"

const stateDefault = {
    arrFilm: [

    ],
    arrFilmDefault: [

    ]


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

        default: return { ...state }
    }
}

