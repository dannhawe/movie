import React from 'react'
export default function HomeCard(film) {
    console.log(film)
    return (
        <div className=" md:w-1/5 w-full">
            <div className="h-full bg-gray-100 rounded">
            <img src={film.hinhAnh}/>
            <h3>{film.tenPhim}</h3>
            <p>{film.moTa}</p>
            <button>Dat Ve</button>
            
            </div>
        </div>
    )
}
