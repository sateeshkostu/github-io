import React, { useState } from "react";
import './header.css'
import { Link } from 'react-router-dom';
import Bodyhome from "../bodyhome/Bodyhome";

const latest = [
  {
    cover: "./images/img1.jpg",
  },
  {
    cover: "./images/img02.jpg",
  },
  {
    cover: "./images/img03.jpg",
  },
  {
    cover: "./images/img04.jpg",
  },
  {
    cover: "./images/img5.jpeg",
  },
]
const recomanded = [
  {
    cover: "./images/img11.jpeg",
  },
  {
    cover: "./images/img12.jpeg",
  },
  {
    cover: "./images/img13.jpg",
  },
  {
    cover: "./images/img14.jpg",
  },
  {
    cover: "./images/img15.jpg",
  },
]
export const Header = () => {
  const [mobile, setmobile] = useState(false);

  return (
    <>
      {/* navbar creation */}
      <header>
        <div className="containner flexSB">
          <nav className='flexSB'>
            <div className="logo">
              <img src="./images/download.png" alt="" />
            </div>
            <ul className={mobile ? "navmenu-list" : "flexSB"} onClick={() => setmobile(false)}>
              <Link to="/">home</Link>
              <Link to="/series">series</Link>
              <Link to="/movies">movies</Link>
              <Link to="/pages">pages</Link>
              <Link to="/pricing">pricing</Link>
              <Link to="/contact">contact</Link>
            </ul>
            <button className="toggle" onClick={() => setmobile(!mobile)}>
              {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
      <Bodyhome />
      {/* bodyhome code is import to header jsx */}

      <div className="heading">
        <h1 style={{ color: 'black' }}>Latest movies</h1>
        <Link to="/" style={{ color: 'red' }}> Viewall</Link>
      </div>
        <div className='latest'>
          {latest.map((image) => (
            <img src={image.cover} alt="" />
          ))}
        </div>
      
      <div className="heading">
        <h1 style={{ color: 'black' }}>Recomanded movies</h1>
        <Link to="/" style={{ color: 'red' }}>Viewall</Link>
      </div>
      <div className='recomanded'>
        {recomanded.map((image) => (
          <img src={image.cover} alt="" />
        ))}
      </div>


    </>
  )
}

export default Header;