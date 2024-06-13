import React from 'react'
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { GrFavorite } from "react-icons/gr";
import { IoAddOutline } from "react-icons/io5";

const SubNav = () => {
  return (
    <div className="container">
      <div className="first">
        <div className="font-name">
          <span className='name'>Neue Helvetica</span>
          <div className="styles">
            <span>59 styles</span>
            <a href="" className='by-linotype'>By Linotype</a>
          </div>
          <div className="same-line">
            <span className='bestseller'>
              <div className="warpper">
                <HiMiniArrowTrendingUp className='uparrow' />
                #1 Bestseller
              </div>
            </span>
            <span className='off'>
              <div className="warpper">
                5% off
              </div>
            </span>
          </div>
        </div>
        <div className="add">
          <div className='fav'>
            <GrFavorite />
            <span>Favorite</span>
          </div>
          <div className='addto'>
            <IoAddOutline />
            <span> Add to</span>
          </div>
        </div>
      </div>
      <div className="subnav">
        <ul>
          <li><a href="">Gallery</a></li>
          <li><a href="">Font styles and packages</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Glyphs</a></li>
          <li><a href="">Related</a></li>
          <li><a href="">Other details</a></li>
        </ul>
      </div>
    </div>
  )
}

export default SubNav