import React from 'react'
import FontData from './components/fontData'
import "../../styles/fontdetail/fontdetail.scss"
import Fsp from './components/Fsp'
import FspTags from './components/mobileView/fspTags'
import FontStyles from './components/FontStyles'
import Footer from './components/Fotter'
const FontDetails = () => {
  return (
    <div>
      <FontData />
      <Fsp />
      <FontStyles />
      <Footer />
      <FspTags />
    </div>
  )
}

export default FontDetails