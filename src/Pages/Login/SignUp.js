import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { qlThongTinNguoiDung } from '../../Services/QuanLyThonTinNguoiDung';
export default function SignUp() {
  const [state, setState] = useState('')
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  const onFinish = async (values) => {
    try {
      const result = await qlThongTinNguoiDung.DangKy(values)
      console.log(result)
      setState('')
    } catch (err) {
      setState(err.response?.data.content)
      console.log(err.response?.data.content)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const checkValidation = () => {

  }
  return (
    <Form
      // onSubmitCapture={formik.handleSubmit}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 18 }}
      autoComplete="off"
    >
      <Form.Item
        label="Tài Khoản"
        name="taiKhoan"
        rules={[{ required: true, message: 'Please input your username!', },]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Mật Khẩu"
        name="matKhau"
        rules={[{ required: true, message: 'Please input your password!', },]} >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Họ Tên"
        name="hoTen"
        rules={[{ required: true, message: 'Please input your username!', },]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!', },]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Số Điện thoại"
        name="soDt"
        rules={[{ required: true, message: 'Please input your username!', },]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Mã Nhóm"
        name="maNhom"
        rules={[{ required: true, message: 'Please input your username!', },]}>
        <Input />
      </Form.Item>


      <Form.Item
        wrapperCol={{ offset: 3, span: 16, }}>
        <button type="submit"> Submit </button>
        <span className='text-red-600 tex-xl'>{state}</span>
      </Form.Item>
    </Form>


  )
}
