import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from "yup";
import { history } from '../../../App';
import { qlThongTinNguoiDung } from '../../../Services/QuanLyThonTinNguoiDung';
import { GROUPID } from '../../../util/Settings/config';
export default function UpdateNguoiDung() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('formNguoiDung'))
    const [state, setState] = useState('')


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: user?.taiKhoan,
            matKhau: user?.matKhau,
            email: user?.email,
            soDt: user?.soDt,
            maNhom: GROUPID,
            maLoaiNguoiDung: user?.maLoaiNguoiDung,
            hoTen: user?.hoTen,
        },
        onSubmit: async values => {
            try {
                const result = await qlThongTinNguoiDung.CapNhatThongTinNguoiDung(values)
                console.log(result)
                alert('Cập nhật thành công ')
                history.push('/admin/profile')
                setState('')
            } catch (err) {
                console.log(err.response)
                setState(err.response.data.content)
            }
        },
        onChange: (e) => {
            console.log(e)
        },

        validationSchema: Yup.object({
            taiKhoan: Yup.string().min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters").required("Required!"),
            matKhau: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
            email: Yup.string().email("Invalid email format").required("Required!"),
            hoTen: Yup.string().min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters").required("Required!"),
            soDt: Yup.string().matches(phoneRegExp, 'Phone number is not valid').max(10, 'Error'),
            maNhom: Yup.string().required("Required!")
        })
    });
    return (
        <>
            <h1 className="text-red-500 text-2xl italic text-center uppercase mb-5">{state}</h1>
            <form className="w-full max-w-lg w-4/6 mx-auto" onSubmit={formik.handleSubmit}>
                {/* TÀI KHOẢN + HỌ TÊN  */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0  md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="taiKhoan">
                            Tài Khoản
                        </label>
                        <input disabled onChange={formik.handleChange} className="appearance-none block w-full cursor-no-drop bg-gray-400 text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='taiKhoan' value={formik.values.taiKhoan} type="text" placeholder="Tài Khoản" />
                        {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                            <p className="text-red-500 text-xs italic">{formik.errors.taiKhoan}</p>
                        )}

                    </div>
                    {/* HỌ TÊN  */}
                    <div className="w-full  px-3  md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="hoTen">
                            Họ Tên
                        </label>
                        <input onChange={formik.handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={formik.values.hoTen} name='hoTen' type="text" placeholder="Họ Tên" />
                        {formik.errors.hoTen && formik.touched.hoTen && (
                            <p className="text-red-500 text-xs italic">{formik.errors.hoTen}</p>
                        )}
                    </div>
                </div>
                {/* Password  */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="matKhau">
                            PASSWPRD   <span className="text-gray-600 font-normal text-xs italic">Make it as long and as crazy as you'd like</span>
                        </label>
                        <input onChange={formik.handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={formik.values.matKhau} name='matKhau' type="text" placeholder="******************" />
                        {formik.errors.matKhau && formik.touched.matKhau && (
                            <p className="text-red-500 text-xs italic">{formik.errors.matKhau}</p>
                        )}
                    </div>
                </div>
                {/* EMAIL + SDT  */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input onChange={formik.handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='email' value={formik.values.email} type="email" placeholder="admin@gmail.com" />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                        )}
                    </div>
                    {/* SDT  */}
                    <div className="w-full  px-3 md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="soDt">
                            Số Điện Thoại
                        </label>
                        <input onChange={formik.handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={formik.values.soDt} name='soDt' type="text" placeholder="090-1125-275" />
                        {formik.errors.soDt && formik.touched.soDt && (
                            <p className="text-red-500 text-xs italic">{formik.errors.soDt}</p>
                        )}
                    </div>
                </div>

                {/* MÃ NHÓM + LOẠI NGƯỜI DÙNG  */}
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maNhom">
                            Mã Nhóm
                        </label>
                        <input disabled onChange={formik.handleChange} className="cursor-no-drop appearance-none block w-full  bg-gray-400 text-gray-900 border border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={formik.values.maNhom} name='maNhom' type="text" placeholder="GP00 GB01 ....GP15" />
                        {formik.errors.maNhom && formik.touched.maNhom && (
                            <p className="text-red-500 text-xs italic">{formik.errors.maNhom}</p>
                        )}
                    </div>
                    {/* LOẠI NGƯỜI DÙNG */}

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Loại Người Dùng
                        </label>
                        <div className="relative">
                            <select onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="maLoaiNguoiDung" name='maLoaiNguoiDung'>
                                <option value='KhachHang'>Khách hàng</option>
                                <option value='QuanTri'>Quản Trị</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>


                    </div>

                </div>
                {/* BUTTON SUBMIT  */}
                <div class="flex items-center justify-between mt-5">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <NavLink class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to={'/admin/profile'}>
                        Quay lại
                    </NavLink>
                </div>
            </form>
        </>
    );
}