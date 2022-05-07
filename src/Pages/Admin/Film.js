import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDanhSachPhimAction } from '../../Redux/Action/DanhSachPhimAction';
export default function Film() {
    let { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch()
    console.log({ arrFilmDefault })
    useEffect(() => {
        dispatch(getDanhSachPhimAction())
    }, [])
    const columns = [
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            width: '10%',
        },
        {
            title: 'hình Ảnh',
            render: (text, film, index) => {
                return <Fragment>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
                </Fragment>
            },
            width: '10%',
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            width: '25%',
        },

        {
            title: 'Mô Tả',
            dataIndex: 'moTa',
            render: (text, film) => {
                return text.length > 100 ? text.slice(0, 100) + '...' : text
            },
            width: '45%',
        },
        {
            title: '',
            render: ()=>{
                return <div>
                    <button> <EditOutlined  className='text-2xl text-blue-600 mr-2'/></button>
                    <button> <DeleteOutlined   className='text-2xl text-red-600'/></button>
                </div>
            }
        },
    ];

    const data = arrFilmDefault

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <Table columns={columns} dataSource={data} onChange={onChange} />

        </div>
    )
}
