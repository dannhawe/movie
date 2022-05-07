import { qlPhimSevices } from "../../Services/QuanLyPhimSevices"
import { SET_CAROUSEL } from "../Types/Type"


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await qlPhimSevices.layDanhSachBanner()
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (err) {
            console.log(err)
        }
    }
}