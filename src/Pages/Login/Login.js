import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LoginAction } from '../../Redux/Action/QuanLyNguoiDungAvtion';
export default function Login() {
  const dispatch = useDispatch()
  const {userLogin} = useSelector(state=>state.QuanLyTTNguoiDungReducer)
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: values => {
        dispatch(LoginAction(values))
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="px-12 py-10">
      <div className="w-full mb-2">
        <div className="flex items-center">
          <i className="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user" />
          <input name='taiKhoan' onChange={formik.handleChange} type="text" placeholder="Tài Khoản" className="-mx-6 px-8  w-full border rounded px-3 py-1 text-gray-700" />
        </div>
      </div>
      <div className="w-full mb-2">
        <div className="flex items-center">
          <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock" />
          <input name='matKhau' onChange={formik.handleChange} type="text" placeholder="Mật Khẩu" className="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700" />
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div className="flex items-center">
          <NavLink to={'/signup'} className="text-xs text-gray-700">Bạn chưa có tài khoản ?</NavLink>
        </div>
        <div>
          <button type="text" className="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2">SIGN IN</button>
        </div>
      </div>
    </form>
  )
}
