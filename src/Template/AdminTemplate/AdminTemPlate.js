import { HomeOutlined, UnorderedListOutlined, UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { history } from '../../App';
import { USER_LOGIN } from '../../util/Settings/config';

export const AdminTemPlate = (props) => {

    const { userLogin } = useSelector(state => state.QuanLyTTNguoiDungReducer)
    const { Component, ...resParam } = props
    const { Header, Sider, Content } = Layout;
    let [state, setState] = useState({
        collapsed: false,
    })
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('vui lòng đăng nhập')
        return <Redirect to='/' />
    }

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return (<Route {...resParam} render={(propsRoute) => {
        return <Layout>
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <NavLink to={'/admin'}><UnorderedListOutlined /></NavLink>,
                            label: 'LIST FILMS',
                        },
                        {
                            key: '2',
                            icon: <NavLink to={'/admin/addfilm'}><VideoCameraAddOutlined /></NavLink>,
                            label: 'ADD FILM',
                        },
                        {
                            key: '3',
                            icon: <NavLink to={'/admin/profile'}><UserOutlined /></NavLink>,
                            label: 'Profiles',
                        },
                    ]}
                />
                <button className='w-full h-full' onClick={toggle}></button>
            </Sider>
            <Layout className="site-layout">
                <Header className='bg-gradient-to-r from-white via-green-300 to-green-500' style={{ height: '45px' }}>
                    <div className=' flex justify-between items-center h-full'>
                        <div className='font-bold text-sm text-green-600 font-mono'><i> hi !{userLogin.taiKhoan} </i></div>
                        <div className=' text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600'> ADMIN PAGE </div>
                        <div>
                            <button onClick={() => {
                                history.push('/')
                            }} className='text-red-600 text-3xl font-bold'> <HomeOutlined /></button>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}>
                    <Component {...propsRoute} />
                </Content>
            </Layout>
        </Layout >
    }} />

    );
}

