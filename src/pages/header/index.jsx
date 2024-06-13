import React from 'react';
import Slider from './components/Slider';
import Header from './components/Header';
import "../../styles/navigation/navigation.scss"
import Sidebar from './components/mobileView/Sidebar';
const Index = () => {
    return (
        <div>
         <Slider />
         <Sidebar/>
         <Header/>
          </div>

    )
}

export default Index;