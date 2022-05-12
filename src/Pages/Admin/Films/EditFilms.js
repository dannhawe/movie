import {
    DatePicker, Form,
    Input, InputNumber, Switch
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimUpLoad, getThongTinPhimAction } from '../../../Redux/Action/DanhSachPhimAction';
import { GROUPID } from '../../../util/Settings/config';

export default function EditFilm(props) {
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch()
    let [img, setImg] = useState('')
    const { thongTinFilm } = useSelector(state => state.QuanLyPhimReducer)
    const { id } = props.match.params
    useEffect(() => {
        dispatch(getThongTinPhimAction(id))
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: id,
            tenPhim: thongTinFilm?.tenPhim,
            trailer: thongTinFilm?.trailer,
            moTa: thongTinFilm?.moTa,
            ngayKhoiChieu: moment(thongTinFilm?.ngayKhoiChieu),
            danhGia: thongTinFilm?.danhGia,
            dangChieu: thongTinFilm?.dangChieu,
            sapChieu: thongTinFilm?.sapChieu,
            hot: thongTinFilm?.hot,
            hinhAnh: null,
        },
        onSubmit: (values) => {
            let formData = new FormData();
            formData.append("maNhom", GROUPID)
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                }
                else {
                    if (values.hinhAnh !== null) {
                        formData.append('file', values.hinhAnh, values.hinhAnh.name)
                    }
                }
            }
            dispatch(capNhatPhimUpLoad(formData))
        },
    });
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const handleSubmitDate = (e) => {
        formik.setFieldValue('ngayKhoiChieu', moment(e))
    }
    const handlesSubmitValue = (name) => {
        return (e) => {
            formik.setFieldValue(name, e)
        }
    }
    const hangdleChangFile = async (e) => {
        let files = e.target.files[0]
        await formik.setFieldValue('hinhAnh', files)
        let reader = new FileReader();
        reader.readAsDataURL(files)
        reader.onload = (e) => {
            setImg(e.target.result)
        }

    }
    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 5,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >
            <Form.Item label="Tên Phim">
                <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
            </Form.Item>
            <Form.Item label="Mô Tả">
                <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
            </Form.Item>
            <Form.Item label="Ngày Khởi Chiếu">
                <DatePicker format={'DD/MM/YYYY'} onChange={handleSubmitDate} value={moment(formik.values.ngayKhoiChieu)} />
            </Form.Item>
            <Form.Item label="Đánh Giá (số sao )">
                <InputNumber onChange={handlesSubmitValue("danhGia")} min={0} max={10} value={formik.values.danhGia} />
            </Form.Item>
            <div className='ml-10 flex justify-end'>

                <Form.Item className='w-full' label=" đang chiếu" valuePropName="đang chiếu">
                    <Switch className='bg-gray-500' onChange={handlesSubmitValue("dangChieu")} defaultChecked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item className='w-full' label="sắp chiếu" valuePropName="sắp chiếu">
                    <Switch className='bg-gray-500' onChange={handlesSubmitValue("sapChieu")} defaultChecked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item className='w-full' label="hot" valuePropName="hot">
                    <Switch className='bg-gray-500' onChange={handlesSubmitValue("hot")} defaultChecked={formik.values.hot} />
                </Form.Item>


            </div>
            <Form.Item label="Hình Ảnh">
                <input type='file' onChange={hangdleChangFile} accept="image/png, image/jpeg, image/gif,image/webp"></input>
                <br />
                <img style={{ width: 150, height: 150 }} src={img ? img : thongTinFilm.hinhAnh}></img>
            </Form.Item>
            <Form.Item label="hoàn thành">
                <button type='submit' className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Cập Nhật </button>
            </Form.Item>
            {
                document.querySelector('.ant-picker-clear') ? document.querySelector('.ant-picker-clear').innerHTML = '' : ''
            }
        </Form>

    );
};