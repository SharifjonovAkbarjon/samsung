import React from 'react'
import "../Header/Header.scss"
import rasm from '../img/z6.jpg'

const data = [
    {
        id: 1,
        url: rasm,
        title: "Galaxy Z Fold6,512GB",
        price: "Save up to $1200",
        desc: "From $1899.99 before eligible trade-in."
    },
    {
        id: 2,
        url: rasm,
        title: "Galaxy Z Fold5,256GB",
        price: "Save up to $540",
        desc: "From $1799.99 before eligible trade-in."
    },
    {
        id: 3,
        url: rasm,
        title: "Galaxy Tab S9,128GB",
        price: "Save up to $300",
        desc: "From $549.99 before eligible trade-in."
    },
    {
        id: 4,
        url: rasm,
        title: "Galaxy Z Flip6, 512GB",
        price: "Save up to $650",
        desc: "From $1219.99 before eligible trade-in."
    },
    {
        id: 5,
        url: rasm,
        title: "Galaxy S23",
        price: "Save up to $540",
        desc: "From $759.99 before eligible trade-in."
    },
    {
        id: 6,
        url: rasm,
        title: "Galaxy Buds3 Pro",
        price: "Save up to $100",
        desc: "From $249.99 before eligible trade-in."
    }
]


const Header = () => {

    return (
        <>
            <div className="container">
                <div className="header__body">
                    <div className="header__title">
                        <div className='header__head'>
                            <h2>Shop all latest offers and innovations</h2>
                        </div>
                        <div className='header__ul'>
                            <ul>
                                <li>For you</li>
                                <li>Top Deals</li>
                                <li>Mobile</li>
                                <li>TV & Audio</li>
                                <li>Home Appliances</li>
                                <li>Computing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__collection">
                        {
                            data?.map((el) => (
                                <div key={el.id} className="product__collection">
                                    <div className='images'>
                                        <img src={el.url} alt="" />
                                    </div>
                                    <p>{el.title}</p>
                                    <a href="#">{el.price}</a>
                                    <span>{el.desc}</span>
                                    <button>Buy now</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header