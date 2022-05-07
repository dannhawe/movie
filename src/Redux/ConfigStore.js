import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './Reducer/CarouselReducer'
import { LoaddingReducer } from './Reducer/LoaddingReducer'
import { DanhSachPhongVeReducer } from './Reducer/QuanLyDSPhongVeReducer'
import { QuanLyPhimReducer } from './Reducer/QuanLyPhimReducer'
import { QuanLyRapPhimReducer } from './Reducer/QuanLyRapPhimReducer'
import { QuanLyTTNguoiDungReducer } from './Reducer/QuanLyTTNguoiDungReducer.js'
const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapPhimReducer,
    QuanLyTTNguoiDungReducer,
    DanhSachPhongVeReducer,
    LoaddingReducer,
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk))