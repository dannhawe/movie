import { DAT_VE, GET_DANH_SACH_PHONG_VE } from "../Types/Type"

const initialState = {
    arrPhongVe: {},
    arrVeDD: [],
    arrVeKhachDat: [],
    activeKey:'1'
}

export const DanhSachPhongVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DANH_SACH_PHONG_VE: {
            return { ...state, arrPhongVe: action.arrPhongVe }
        }
        case DAT_VE: {
            let { ghe } = action
            let arrUpdate = [...state.arrVeDD]
            let index = arrUpdate.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            if (index !== -1) {
                arrUpdate.splice(index, 1)
            } else {
                arrUpdate.push(ghe)
            }
            return { ...state, arrVeDD: arrUpdate }
        }
        case 'DAT_VE_TANH_CONG':{
            return {...state,arrVeDD:[]}
        }
        case "CHUYEN_TAB":{
            return {...state,activeKey:'2'}
        }
        case 'CHANGE_TAB':{
            return {...state,activeKey:action.num}
        }
        default:
            return { ...state }
    }
}
