import { qlPhimSevices } from "../../Services/QuanLyPhimSevices"
import { GET_LIST_PHIM } from "../Types/Type"

export const getDanhSachPhimAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlPhimSevices.LayDanhSachPhim()
            console.log(result)
            dispatch({
                type: GET_LIST_PHIM,
                arrFilm: result.data.content
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