import { GET_DS_LICH_CHIEU, GET_RAP_PHIM } from "../Types/Type"

const initialState = {
    arrRapPhim: [],
    arrLichChieu: [],
}

export const QuanLyRapPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_RAP_PHIM: {
            return { ...state, arrRapPhim: action.arrRapPhim }
        }
        case GET_DS_LICH_CHIEU: {
            return { ...state, arrLichChieu: action.arrLichChieu }
        }
        case 'CHANGE_TAB': {
            let change = ''
            state.activeKey === '1' ? change = '2' : change = '1'
            return { ...state,activeKey:change }
        }
        default:
            return state
    }
}
