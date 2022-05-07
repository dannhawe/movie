import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../App';
import { getDanhSachPhimAction } from '../../Redux/Action/DanhSachPhimAction';
import { GET_PHIM_DANG_CHIEU, GET_PHIM_SAP_CHIEU } from '../../Redux/Types/Type';
import "./Carousel.css";
export default function Carousel(props) {
    let { arrFilm } = useSelector(state => state.QuanLyPhimReducer)

    const dispatch = useDispatch()
    const [active, setActive] = useState(true)
    useEffect(() => {
        dispatch(getDanhSachPhimAction())
    }, [])
    const renderFilm = () => {
        return arrFilm.map((item, index) => {
            return (
                <div className="h-full bg-gray-100 rounded item my-7 items containerCarousel " key={index}>
                    <div className='imgCarousel' style={{ background: `url(${item.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <img className=' w-full h-48 opacity-0' />

                    </div>
                    <h3 className='text-xl font-bold text-red-500 m-4'>{item.tenPhim.length > 25 ? <span>{item.tenPhim.slice(0, 25)}...</span> : <span> {item.tenPhim}</span>}</h3>
                    <p className='m-4'>{item.moTa.length > 100 ? <span>{item.moTa.slice(0, 100)}...</span> : <span> {item.moTa}</span>}</p>

                    <div className='w-4/6 mx-auto my-4'>
                        <button onClick={()=>{
                            history.push(`/detail/${item.maPhim}`)
                        }} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 w-full rounded-sm">
                            Đặt Vé
                        </button>
                    </div>


                </div>
            )
        })
    }
    return (
        <div>
            <div className='my-6 mt-20'>
                <button className={`${active ? 'active_Films' : 'nonActive_films'} mx-8`} onClick={() => {
                    setActive(true)
                    dispatch({
                        type: GET_PHIM_DANG_CHIEU,
                        arrFilm
                    })
                }}>
                    PHIM ĐANG CHIẾU
                </button>
                <button className={`${active ? 'nonActive_films' : 'active_Films'}`} onClick={() => {
                    setActive(false)
                    dispatch({
                        type: GET_PHIM_SAP_CHIEU,
                        arrFilm
                    })
                }}>
                    PHIM SẮP CHIẾU
                </button>
            </div>
            <OwlCarousel className='owl-theme' loop margin={10} items={4} autoplay={true} dots={false} autoplayTimeout={2500} smartSpeed={4000} autoplayHoverPause={true}>
                {renderFilm()}

            </OwlCarousel>
        </div>


    )
}


// className "owl-theme" is optional
