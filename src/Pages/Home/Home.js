import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../Component/OwlCarousel/Carousel'
import { getCarouselAction } from '../../Redux/Action/CarouselAction'
import { getDanhSachRapPhim } from '../../Redux/Action/DanhSachRapPhimAction'
import HomeCarousel from './HomeCarousel'
import HomeTabs from './HomeTabs'


export default function Home() {
  const dispatch = useDispatch()
  const { arrImg } = useSelector(state => state.CarouselReducer)
  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
  const {arrRapPhim} = useSelector(state=> state.QuanLyRapPhimReducer)
  console.log({arrImg})
  console.log({arrFilm})
  console.log({arrRapPhim})

  useEffect(() => {
    dispatch(getCarouselAction())
  }, [])
  useEffect(() => {
    dispatch(getDanhSachRapPhim())
  }, [])
  return (
    <div className=''>
      <HomeCarousel arrImg={arrImg} />
      <Carousel arrFilm={arrFilm}></Carousel>
      <div className='container mx-auto'>
      <HomeTabs arrRapPhim={arrRapPhim}></HomeTabs>

      </div>
    </div>
  )
}
