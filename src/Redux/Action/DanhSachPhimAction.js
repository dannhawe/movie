import { history } from '../../App'
import { qlPhimSevices } from "../../Services/QuanLyPhimSevices"
import { GET_LIST_PHIM, GET_THONG_TIN_FILM } from "../Types/Type"
export const getDanhSachPhimAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlPhimSevices.LayDanhSachPhim()
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
export const postPhimUploadHinh = (formData) => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlPhimSevices.postPhimUploadHinh(formData)
            alert('thêm phim thành công ')
            history.push('/admin')
            dispatch({
                type: "OFF_LOADDING",
            })
        } catch (err) {
            console.log(err.response)
            dispatch({
                type: "OFF_LOADDING",
            })
        }
    }
}
export const getThongTinPhimAction = (idFilm) => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlPhimSevices.getThongTinPhim(idFilm)
            dispatch({
                type: GET_THONG_TIN_FILM,
                thongTinFilm: result.data.content
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
export const capNhatPhimUpLoad = (formData) => {
    return async (dispatch) => {
        dispatch({
            type: "ON_LOADDING",
        })
        try {
            const result = await qlPhimSevices.capNhatPhimUpLoad(formData)
            console.log(result)
            alert('cập nhật phim thành công ')
            history.push('/admin')
            dispatch(getDanhSachPhimAction())
            dispatch({
                type: "OFF_LOADDING",
            })
        } catch (err) {
            console.log(err.response)
            dispatch({
                type: "OFF_LOADDING",
            })
        }
    }
}
export const xoaPhimAction = (maFilm) => {
    return async (dispatch) => {
        try {
            const result = await qlPhimSevices.xoaPhim(maFilm)
            console.log(result)
            // alert('xóa phim thành công ')
            // history.push('/admin')
            dispatch(getDanhSachPhimAction())
        } catch (err) {
            console.log(err.response)
        }
    }
}