import React, { useState } from 'react';
import "../../../styles/fontdetail/carousel.scss"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextslide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const previousslide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }
    return (
        <div className="carousel">
            <div className='carousel-container'>
                <IoIosArrowBack className='arrow arrow-left' onClick={previousslide} />
                {data.map((item, idx) => {
                    return <img src={item.src} alt={item.alt} className={slide === idx ? "slide" : "slide slide-hidden"} key={idx} />
                })}
                <IoIosArrowForward className='arrow arrow-right' onClick={nextslide} />
            </div>
            <div className="subcarousel">
                {data.map((item, idx) => (
                    <img
                        onClick={() => setSlide(idx)}
                        src={item.src}
                        alt={item.alt}
                        className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
                        key={idx}
                    />
                ))}
            </div>
        </div>

    )
}

export default Carousel


