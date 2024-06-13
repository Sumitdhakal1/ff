import React, { useState } from 'react'
import "../../../../styles/fontdetail/Mobileview/fspTags.scss"
import { IoIosArrowDown } from "react-icons/io";
import { CompleteTags } from '../../data/CompleteTags';
import Addto from '../Addto';
import "../../../../styles/fontdetail/fsp.scss"

const FspTags = () => {
  const[isOpen, setIsOpen]=useState(false);
  const[selectedOption, setSelectedOption]=useState(null);
  const toggling =()=> setIsOpen(!isOpen)

  const onOptionClicked =(value)=>{
    setSelectedOption(value);
    setIsOpen(false)
  }
  return (
     <div className="mobile-view">
    <div className="select-menu">
        <div
        onClick={toggling}
         className="select-btn">
            <span
             className='sBtn-txt'>{selectedOption ||'select your option'}</span>
            <IoIosArrowDown />
        </div>
        {isOpen &&(
        <ul className="options">
           {CompleteTags.map((item, idx)=>(
            <li key={idx} className='option' onClick={()=>onOptionClicked(item)}>
              <span className='option-text'>{item}</span>
            </li>
           ))} 
        </ul>
        )}
    </div>
    <div className="but">
      <Addto/>
      </div>
     </div>
  )
}

export default FspTags