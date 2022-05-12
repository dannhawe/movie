/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, Form, InputNumber, Select } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { history } from '../../../App';
import { qlDatVeService } from '../../../Services/QuanLyDatVeService';
import { qlRapPhimSevices } from '../../../Services/QuanLyRapPhimSevices';

export default function EditTaskFilms(props) {
    const storeFilms = JSON.parse(localStorage.getItem('StoreFilms'))
    console.log(props)
    const [state, setstate] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: '',
        },
        onSubmit: async values => {
            try {
                const result = await qlDatVeService.TaoLichChieu(values)
                console.log(result)
                alert('Tạo Thành Công')
                history.push('/admin')
            } catch (err) {
                console.log(err)
            }
        },
    });
    useEffect(() => {
        (async () => {
            try {
                const result = await qlRapPhimSevices.layThongTinHeThongRap()
                setstate({
                    ...state,
                    heThongRapChieu: result.data.content,
                })

            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    const onChangeHeThongRap = async (value) => {
        try {
            const result = await qlRapPhimSevices.layThongTinCumRapTheoHeThong(value)
            setstate({
                ...state,
                cumRapChieu: result.data.content,
            })
        } catch (err) {
            console.log(err)
        }
    }
    const onChangeCumRapChieu = (values) => {
        formik.setFieldValue('maRap', values)
    }
    function onSearch(val) {
    }
    const handleChangeDaPicker = (val, valStr) => {
        const date = moment(valStr).format('DD/MM/YYYY hh:mm:ss')
        formik.setFieldValue('ngayChieuGioChieu', date)
    }
    function onChangeInput(value) {
        formik.setFieldValue('giaVe', value)
    }
    return <div className='flex justify-around'>
        <div className='text-center text-4xl font-mono font-bold text-red-400'>
            <h1 className='mb-10' ><i>{storeFilms.tenPhim}</i></h1>
            <img src={storeFilms.hinhAnh} />
        </div>
        <div className='flex justify-center items-center'>
            <Form
                onSubmitCapture={formik.handleSubmit}
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 10 }}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Hệ thống rạp chiếu"
                    name="heThongRapChieu"
                >
                    <Select
                        placeholder="hệ thống rạp chiếu"
                        showSearch
                        onChange={onChangeHeThongRap}
                        onSearch={onSearch}
                        style={{ width: 200 }}
                        options={state.heThongRapChieu?.map((htrc, index) => {
                            return { label: htrc.tenHeThongRap, value: htrc.maHeThongRap }
                        })}
                    >
                    </Select>
                </Form.Item>

                <Form.Item
                    label="cụm rạp chiếu"
                    name="cumRapChieu"
                >
                    <Select
                        showSearch
                        onChange={onChangeCumRapChieu}
                        onSearch={onSearch}
                        style={{ width: 200 }}
                        placeholder="Cụm rạp chiếu "
                        options={state.cumRapChieu?.map((crc, index) => {
                            return { label: crc.tenCumRap, value: crc.maCumRap }
                        })}
                    >
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="date"
                >
                    <DatePicker onChange={handleChangeDaPicker} showTime />
                </Form.Item>
                <Form.Item
                    label="Giá Tiền"
                    name="Gia"
                >
                    <InputNumber min={75000} max={150000} onChange={onChangeInput} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                        Submit
                    </button>
                </Form.Item>
            </Form>
        </div>

    </div>
}
