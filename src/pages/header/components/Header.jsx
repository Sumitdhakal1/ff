import React from 'react'
import logo from '../../../assets/myfont.png'
import { FaSearch } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { IoReorderThree } from "react-icons/io5";

import '../../../styles/navigation/navigation.scss'
import Last from './Last';
const Header = () => {
  return (
    <div className="header">
     <div className="opener">
     <IoReorderThree className='reorder' />
     </div>
      <div className="header-logo">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="first-contaier">
          <div className="start">
            <form className="search" action="">
              <FaSearch className="search-icon" />
              <input className="search-input" type="text" placeholder="Search for fonts and foundries" id="" />
              <div className="camera">
                <CiCamera />
              </div>
            </form>
             {/* it is end part for navbar*/}
            <Last/> 
          </div>
        </div>

        <div className="second-container">
          <ul className="menu">
            <li> <a href="">Browse By</a> </li>
            <li> <a href="">Bestseller</a> </li>
            <li> <a href="">Hot new fonts</a> </li>
            <li> <a href="">Foundries</a> </li>
            <li> <a href="">What the font </a> </li>
            <li className='subcription'> <a href="">Subcription plans</a> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header