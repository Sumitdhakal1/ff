import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCurrencyDollar } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const Last = () => {
  return (
    <div className="last">
    <div className="selector">
    <a href="" className='learn'> learn <IoMdArrowDropdown className="" /> 
    <div className="line"></div>
     </a>
    <a href="">  <TbCurrencyDollar />  <IoMdArrowDropdown className="" /> 
    <div className="line"></div> 
    </a>
    <a href=""> EN  <IoMdArrowDropdown className="" />  </a>
    </div>
    <div className="add">
    <a href="">   <MdOutlineShoppingCart className="cart" /> </a>
    <a href="">   <CgProfile className="profile" /> </a>
    </div>
  </div>
  )
}

export default Last