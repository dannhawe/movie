import { Tabs } from 'antd';
import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function HomeTabs(props) {
  console.log(props)
  const { TabPane } = Tabs;
  const renderRapPhim = () => {
    return props.arrRapPhim?.map((rapPhim, index) => {
      return <TabPane tab={<img src={rapPhim.logo} alt={rapPhim.logo} className='rounded-full w-10' />} key={index}>
        <Tabs tabPosition='left'>
          {/* cum rap phim render tai day  */}
          {rapPhim.lstCumRap?.map((cumRap, index) => {
            return <TabPane tab={
              <div className='flex'>
                <img src={rapPhim.logo} alt={rapPhim.logo} className='rounded-full w-10'></img>
                <div className='text-left ml-3'>
                  <h1 className='text-green-900 text-xl'> {cumRap.tenCumRap} </h1>
                  <h2>{cumRap.diaChi}</h2>
                </div>
              </div>
            } key={index}>
              {/* phim render tai day  */}
              {cumRap.danhSachPhim?.slice(0, 5).map((phim, index) => {
                return <div className='my-5 flex border-b-4 py-10'>
                  <img src={phim.hinhAnh} alt={phim.maPhim} className='w-36 h-36'
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "https://picsum.photos/200/300";
                    }} >

                  </img>
                  <div className='ml-4'>
                    <h1 className='text-cyan-800 text-2xl'>{phim.tenPhim}</h1>
                    <h1 className='text-green-900 text-sm my-3'> {cumRap.tenCumRap} <br></br>   <span>{cumRap.diaChi}</span> </h1>
                    
                    <div className='grid-cols-5 grid  gap-x-10 gap-y-5'>
                      {phim.lstLichChieuTheoPhim?.slice(0, 12).map((time, index) => {
                        return <NavLink to={`/checkout/${time.maLichChieu}`} className='text-sm text-green-900'>
                          {moment(time.ngayChieuGioChieu).format('hh:mm A')}
                        </NavLink>
                      })}
                    </div>
                  </div>
                </div>

              })}
            </TabPane>
          })}
        </Tabs>
      </TabPane>
    })
  }
  return (
    <div>
      <Tabs tabPosition='left'>
        {renderRapPhim()}
      </Tabs>
    </div>
  )
}
