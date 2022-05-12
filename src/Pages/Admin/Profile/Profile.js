import {
  DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { LayDanhSachNguoiDungAction, TimKiemNguoiDung, XoaNguoiDungAction } from '../../../Redux/Action/QuanLyNguoiDungAvtion';
export default function Profile() {
  const dispatch = useDispatch()
  const { listNguoiDung, listNguoiDungTimKiem } = useSelector(state => state.QuanLyTTNguoiDungReducer)
  useEffect(() => {
    dispatch(LayDanhSachNguoiDungAction())
  }, [])
  const handlechange = (event) => {
    let { name, value, type } = event.target;
    dispatch(TimKiemNguoiDung(value))
  }
  const data = listNguoiDungTimKiem.length !== 0 ? listNguoiDungTimKiem : listNguoiDung
  console.log(data)
  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      key: 'name',
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      ellipsis: true,
    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'matKhau',
      key: 'age',
      ellipsis: true,
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      ellipsis: true,
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDt',
      key: 'age',
      ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'age',
      ellipsis: true,
    },
    {
      title: 'Type',
      dataIndex: 'maLoaiNguoiDung',
      sorter: (a, b) => a.maLoaiNguoiDung.length - b.maLoaiNguoiDung.length,
    },
    {
      title: '',
      dataIndex: '',
      render: (text, record, index) => {
        return <>
          <button onClick={() => {
            localStorage.setItem('formNguoiDung', JSON.stringify(record))
            history.push('/admin/profile/update')
          }}> <EditOutlined className='text-2xl text-blue-500' /></button>
          <button> <DeleteOutlined className='text-2xl text-red-500 ml-4' onClick={() => {
            if (window.confirm('Bạn có muốn xóa người dùng này ?')) {
              dispatch(XoaNguoiDungAction(record.taiKhoan))
            }
          }} /></button>
        </>
      }

    },
  ];
  return (
    <>
      <input onChange={handlechange} className="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Seach" name='taiKhoan' />

      <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => { history.push('/admin/profile/add') }}>Add Người Dùng</button>
      
      <Table columns={columns} dataSource={data} />
    </>
  )
}
