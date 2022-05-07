import { Carousel } from 'antd';
import React from 'react';

export default function HomeCarousel(props) {

  const { arrImg } = props
  const RenderCarousel = () => {
    return arrImg.map((item, index) => {
      return <div key={index}>
        <img src={item.hinhAnh} alt='i' className='w-full max-h-50' />
      </div>
    })
  }
  return (
    <Carousel autoplay>
      {RenderCarousel()}
    </Carousel>
  

  )
}
