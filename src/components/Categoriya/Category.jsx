import React from 'react'
import rasm from '../img/1.jpg'
import "../Categoriya/Category.scss"
import links from '../Main/Main'

const Category = ({ matn,bg,  text, img,name,title }) => {
  return (
    <>
      <div className="container">
        <div style={{background:bg}} className='category'> 
          <h2>{text}</h2>
          <div className='map'>
            {matn?.map((el, inx) => (
              <p key={inx}>
                {el}
              </p>
            ))}
          </div>
          <div className='img__part'>
            <img className='imag' src={img} alt="" />
          </div>
          <div className='category__p'>
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
          <div className='btns'>
            <button>Learn more</button>
            <button className='buton_buy'>Buy now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category


