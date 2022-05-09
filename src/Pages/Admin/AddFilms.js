import {
    DatePicker, Form,
    Input, InputNumber, Switch
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPhimUploadHinh } from '../../Redux/Action/DanhSachPhimAction';
import { GROUPID } from '../../util/Settings/config';
export default function FormSizeDemo(props) {
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch()
    let [img, setImg] = useState('')
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            danhGia: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            hinhAnh: {},
        },
        onSubmit: (values) => {
            let formData = new FormData();
            formData.append("maNhom", GROUPID)
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                }
                else {
                    formData.append('file', values.hinhAnh, values.hinhAnh.name)
                }
            }
            dispatch(postPhimUploadHinh(formData))
        },
    });
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const handleSubmitDate = (e) => {
        formik.setFieldValue('ngayKhoiChieu', moment(e).format('DD/MM/YYYY'))
    }
    const handlesSubmitValue = (name) => {
        return (e) => {
            formik.setFieldValue(name, e)
        }
    }
    const hangdleChangFile = (e) => {
        let files = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(files)
        reader.onload = (e) => {
            setImg(e.target.result)
        }
        formik.setFieldValue('hinhAnh', files)
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
                <Input name='tenPhim' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mô Tả">
                <Input name='moTa' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Ngày Khởi Chiếu">
                <DatePicker format={'DD/MM/YYYY'} onChange={handleSubmitDate} />
            </Form.Item>
            <Form.Item label="Đánh Giá (số sao )">
                <InputNumber onChange={handlesSubmitValue("danhGia")} min={0} max={10} />
            </Form.Item>
            <div className='ml-10 flex justify-end'>

                <Form.Item className='w-full' label=" đang chiếu" valuePropName="đang chiếu">
                    <Switch className='bg-gray-500' onChange={handlesSubmitValue("dangChieu")} />
                </Form.Item>
                <Form.Item className='w-full' label="sắp chiếu" valuePropName="sắp chiếu">
                    <Switch className='bg-gray-500' onChange={handlesSubmitValue("sapChieu")} />
                </Form.Item>
                <Form.Item className='w-full' label="hot" valuePropName="hot">
                    <Switch className='bg-gray-500' onChange={handlesSubmitValue("hot")} />
                </Form.Item>


            </div>
            <Form.Item label="Hình Ảnh">
                <input type='file' onChange={hangdleChangFile} accept="image/png, image/jpeg, image/gif,image/webp"></input>
                <br />
                <img style={{ width: 150, height: 150 }} src={img}></img>
            </Form.Item>
            <Form.Item label="hoàn thành">
                <button type='submit' className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>submit </button>
            </Form.Item>
        </Form>
    );
};