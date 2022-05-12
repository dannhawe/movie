import { Rate, Tabs } from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../App';
import { getDanhSachLichChieuPhim } from '../../Redux/Action/DanhSachRapPhimAction';
import './Detail.css';
const { TabPane } = Tabs;

export default function Detail(props) {
  const dispatch = useDispatch()
  const { arrLichChieu } = useSelector(state => state.QuanLyRapPhimReducer)
  let moTa = ''
  if (arrLichChieu.moTa) {
    arrLichChieu.moTa.length > 200 ? moTa = arrLichChieu.moTa.slice(0, 200) + '...' : moTa = arrLichChieu.moTa
  }
  let { id } = props.match.params

  useEffect(() => {
    dispatch(getDanhSachLichChieuPhim(id))

  }, [])
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [])


  return (
    <div className='bg-full' style={{ background: `url(${arrLichChieu.hinhAnh})`, minHeight: '100vh', }}>
      <div style={{ backdropFilter: 'blur(7px)', width: '100%', minHeight: '100vh', backgroundColor: 'rgba(16,18,27,0.4)' }}>
        <div className='flex w-4/5 mx-auto text-white justify-around' style={{ paddingTop: '10%' }}>
          <div className='grid grid-cols-2'>
            <img className='w-72 h-96' src={arrLichChieu.hinhAnh} />
            <div className='w-72' style={{ marginTop: '40%', marginLeft: '5px' }}>
              <p className=' my-1 w-full'>{moment(arrLichChieu.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
              <p className='text-3xl w-full'>{arrLichChieu.tenPhim}</p>
              <p className=' w-full'>{moTa}</p>
            </div>

          </div>
          <div>
            <div class={`c100 p${arrLichChieu.danhGia * 10} big`}>
              <span>{arrLichChieu.danhGia * 10}%</span>
              <div class="slice">
                <div class="bar"></div>
                <div class="fill"></div>
              </div>
            </div>
            <div className=' text-yellow-300 '>
              <span className='text-white mr-3'>ĐÁNH GIÁ</span>
              <Rate allowHalf value={arrLichChieu.danhGia} />
            </div>
          </div>
        </div>

        {/* tabs  */}
        <div className='mt-20'>
          <div className='w-4/6 mx-auto bg-white' style={{ minHeight: '510px' }}>
            <Tabs defaultActiveKey="1" type="card" size={'default'}>
              <TabPane tab="Rạp Chiếu" key="1">
                <Tabs tabPosition='left'>
                  {/* render hệ thống các rạp cgv bhd ...  */}
                  {arrLichChieu.heThongRapChieu?.map((htr, index) => {
                    return <TabPane tab={
                      <div className='flex'>
                        <img className='' src={htr.logo} width={40} height={40} />
                        <div className='flex justify-center items-center mx-3'>
                          <p>{htr.tenHeThongRap}</p>
                        </div>
                      </div>
                    } key={index}>

                      {/* render từng cụm rạp trong hệ thống các rạp  */}
                      {htr.cumRapChieu?.slice(0, 4).map((cumRap, index) => {
                        return (
                          <>
                            <div key={index} className='flex my-4'>
                              <img src={cumRap.hinhAnh} width={80} height={80} className='mr-6' />
                              <div>
                                <p className='text-xl font-bold'>{cumRap.tenCumRap}</p>
                                <p className='text-gray-400'>{cumRap.diaChi}</p>
                                <div className='grid grid-cols-6 gap-x-4 gap-y-2'>
                                  {/* render từng giờ chiếu  */}
                                  {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {

                                    return <div key={index} className='cursor-pointer hover:text-white hover:bg-slate-700 duration-100' onClick={() => {
                                      history.push(`/checkout/${lichChieu.maLichChieu}`)
                                    }}>
                                      {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                    </div>

                                  })}
                                </div>

                              </div>
                            </div>
                            <hr></hr>
                          </>
                        )
                      })}
                    </TabPane>
                  })}
                </Tabs>
              </TabPane>
              <TabPane tab="Mô Tả" key="2">
                <div className='text-red-500 text-2xl w-4/6 mx-auto font-serif'>
                  {arrLichChieu.moTa}</div>
              </TabPane>
              <TabPane tab="Liên Hệ" key="3">
                <p className='text-5xl font-serif font-bold'> Liên Hệ : 0901125275 MR-DUC</p>
              </TabPane>
            </Tabs>

          </div>

        </div>

      </div>
    </div>
  )
}
