import React from 'react'
import "../../../styles/fontdetail/fsp.scss"
import { IoIosArrowForward } from "react-icons/io";
import FspTags from './mobileView/fspTags';
import Addto from './Addto';
import FontStyles from './FontStyles';

const Fsp = () => {
  return (
    <div className="container-fsp">
      <div className="fsp">
        <h1>Fonts styles and packages</h1>
        <span>4 family packages .124 styles</span>
      </div>
      <div className="font-tags">
        <ul className='tags'>
          <li>Complete family (59)</li>
          <li>Complete family (59)</li>
          <li>Complete family (59)</li>
          <li>Complete family (59)</li>
          <li>Complete family (59)</li>
          <IoIosArrowForward />
        </ul>
        <div className="but">
          <Addto />
        </div>
      </div>
    </div>
  )
}

export default Fsp