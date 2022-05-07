import { UnorderedListOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

export const AdminTemPlate = (props) => {
    console.log(props)
    const { Component, ...resParam } = props
    const { Sider, Content } = Layout;
    let [state, setState] = useState({
        collapsed: false,
    })

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
                            icon: <UnorderedListOutlined />,
                            label: 'list Films',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
                <button className='w-full h-full' onClick={toggle}></button>
            </Sider>
            <Layout className="site-layout">
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}>
                    <Component {...propsRoute} />
                </Content>
            </Layout>
        </Layout>
    }} />

    );
}

