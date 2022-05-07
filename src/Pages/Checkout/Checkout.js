/* eslint-disable import/no-anonymous-default-export */
import { CloseCircleOutlined, DollarCircleOutlined, HomeOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DatveAction, getDanhSachGhe } from '../../Redux/Action/DanhSachVeAction';
import { QuanLyNguoiDungAction } from '../../Redux/Action/QuanLyNguoiDungAvtion';
import { DAT_VE } from '../../Redux/Types/Type';
import './Checkout.css';
const { TabPane } = Tabs;

function CheckoutFunction(props) {
  let { id } = props.match.params
  const { arrPhongVe, arrVeDD, arrVeKhachDat } = useSelector(state => state.DanhSachPhongVeReducer)
  const { userLogin } = useSelector(state => state.QuanLyTTNguoiDungReducer)
  const ttDatVe = {
    maLichChieu: '',
    danhSachVe: [
      {
        maGhe: '',
        giaVe: ''
      }
    ]
  }
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getDanhSachGhe(id))
  }, [])




  let tongTien = arrVeDD.reduce((tongTien, ghe, index) => {
    return tongTien += ghe.giaVe;
  }, 0).toLocaleString()
  const renderGhe = () => {
    return arrPhongVe.danhSachGhe?.map((ghe, index) => {
      let classGheDaDat = ghe.daDat ? 'gheDat' : ''
      let classLoaiGhe = ghe.loaiGhe === 'Thuong' ? '' : 'gheVip'
      let classGheDD = ''
      let i = arrVeDD.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      if (i !== -1) {
        classGheDD = 'gheDangDat'
      }
      let classGheMinhDat = ''
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheMinhDat = 'gheMinhDat'
      }
      let classGheKhachDat = ''
      let index2 = arrVeKhachDat?.findIndex(gheKD => gheKD.maGhe === ghe.maGhe)
      if (index2 !== -1) {
        classGheKhachDat = 'gheKhachDat'
      }
      let tenGhe = ghe.daDat ? classGheMinhDat !== '' ? <UserOutlined className='pb-1' /> : <CloseCircleOutlined className='pb-1' /> : classGheKhachDat !== '' ? <UsergroupAddOutlined className='pb-1' /> : ghe.tenGhe;

      return <>
        <button disabled={ghe.daDat || classGheKhachDat !== ''} onClick={() => {
          dispatch({ type: DAT_VE, ghe })
        }} className={`ghe ${classGheDaDat} ${classGheKhachDat} ${classGheDD} ${classLoaiGhe} ${classGheMinhDat}`} key={index}>{tenGhe}</button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </>
    })
  }
  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-12'>
        <div className='col-span-8'>
          <div className='w-4/6 mx-auto'>
            <div className='w-full bg-black text-sm'>man hinh</div>
            <div id='trapezoid' className='text-gray-600 font-bold text-center'>màn hình</div>
          </div>
          <div className='flex justify-center mt-2'>
            <div>
              {renderGhe()}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Ghế Trống
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Ghế VIP
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Ghế Đang Chọn
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Ghế Đã đặt
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Ghế Bạn Đã Đặt
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Ghế khách Đặt
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className='ghe'>  <DollarCircleOutlined className='pb-1' />  </button>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className='ghe gheVip'>  <DollarCircleOutlined className='pb-1' />  </button>

                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className='ghe gheDangDat'>  <DollarCircleOutlined className='pb-1' />  </button>

                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className='ghe gheDat'>  <DollarCircleOutlined className='pb-1' />  </button>

                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className='ghe gheMinhDat'>  <DollarCircleOutlined className='pb-1' />  </button>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className='ghe gheKhachDat'>  <DollarCircleOutlined className='pb-1' />  </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='col-span-4 w-5/6 mx-auto'>
          <div className='flex justify-center'>
            <h1 className='text-3xl text-green-400 '> {tongTien}đ</h1>
          </div>
          <br></br>
          <p className='text-2xl font-mono font-bold '>{arrPhongVe.thongTinPhim?.tenPhim}</p>
          <p className=' text-gray-500  font-thin'>{arrPhongVe.thongTinPhim?.tenCumRap}</p>
          <div className='flex justify-between'>
            <p className='text-xl mt-4 font-serif'>{arrPhongVe.thongTinPhim?.gioChieu}</p>
            <p className='text-xl mt-4 font-serif'>{arrPhongVe.thongTinPhim?.tenRap}</p>
          </div>
          <br></br>
          <div className='flex justify-between mb-3'>
            <div className='grid grid-cols-6'>
              <p className='text-red-300 text-xl col-span-1'>ghế:</p>
              <div className='col-span-5'>
                <div className='grid grid-cols-5'>
                  {_.sortBy(arrVeDD, [Number("tenGhe")])?.map((item, index) => {
                    return <p className='text-green-500 mx-2 text-xl'>{item.tenGhe}</p>
                  })}
                </div>
              </div>
            </div>


            <p className='text-green-400 text-xl'>{tongTien}</p>
          </div>
          <p className='email'><i>email</i></p>
          <p className='text-2xl'>{userLogin.email}</p>
          <br></br>
          <p className='email'><i>Phone</i></p>
          <p className='text-2xl'>{userLogin.SoDT ? userLogin.soDT : '0901125275'}</p>
          <div className='h-1/3 flex justify-center items-end'>
            <div className='text-2xl font-bold px-24 bg-green-500 rounded-lg cursor-pointer' onClick={() => {
              ttDatVe.maLichChieu = id;
              ttDatVe.danhSachVe = arrVeDD;
              console.log(ttDatVe)
              dispatch(DatveAction(ttDatVe))
            }}> ĐẶT VÉ</div>
          </div>
        </div>

      </div>



    </div>
  )
}

function ThongTinDatVe(props) {
  const dispatch = useDispatch()
  let { thongTinTk } = useSelector(state => state.QuanLyTTNguoiDungReducer)
  useEffect(() => {
    dispatch(QuanLyNguoiDungAction())
  }, [])
  return <>
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <h1 className='text-center font-mono font-bold text-4xl'> <i>THÔNG TIN ĐẶT VÉ</i></h1>
        <div className="flex flex-wrap sm:-m-4">
          {thongTinTk.thongTinDatVe?.map((item, index) => {
            // if (item.danhSachGhe.length !== 0) {
            let gheNgoi = _.first(item.danhSachGhe)
            return <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={item.hinhAnh} />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.tenPhim}</h2>
              <div className='flex justify-between'>
                <p><i>Ngày Đặt: {moment(item.ngayDat).format('DD MMM YYYY')}</i></p>
                <p> Thời Lượng:{item.thoiLuongPhim}P</p>
              </div>
              <p> {gheNgoi?.tenHeThongRap} - {gheNgoi?.tenCumRap} </p>
              <div>
                <span className='mx-2'>Ghế:</span>
                {item.danhSachGhe?.splice(0, 10).map((ghe, index) => {
                  return <span className='text-green-500 mx-2'>[{ghe.tenGhe}]</span>
                })}
              </div>
            </div>
            // }
          })}

        </div>
      </div>
    </section>
  </>

}

export default function Checkout(props) {
  useEffect(() => {
    return () => {
      dispatch({
        type: "CHANGE_TAB",
        num: '1'
      })
    }
  }, [])
  let { userLogin } = useSelector(state => state.QuanLyTTNguoiDungReducer)
  const operations = <button type="button" className="text-white bg-gradient-to-r from-red-200 via-red-400 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Helllo ! {`${userLogin.taiKhoan}`}</button>;
  let { activeKey } = useSelector(state => state.DanhSachPhongVeReducer)
  const dispatch = useDispatch()
  return <div className='mx-10'>
    <Tabs defaultActiveKey="1" activeKey={activeKey} tabBarExtraContent={operations} onChange={function (key) {
      dispatch({
        type: "CHANGE_TAB",
        num: key
      })
    }}>
      <TabPane tab="Đặt Vé" key="1">
        {CheckoutFunction(props)}
      </TabPane>
      <TabPane tab="Thông Tin Đặt Vé" key="2">
        {ThongTinDatVe(props)}
      </TabPane>
      <TabPane tab={<NavLink to={'/'}><HomeOutlined  className=' text-2xl pl-96'/></NavLink>} key="3">
      </TabPane>
    </Tabs>
  </div>

}