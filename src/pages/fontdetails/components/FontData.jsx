import React from 'react'
import Carousel from './Carousel'
import { slides } from '../data/ImageData'
import RelatedTags from './RelatedTags'
const FontData = () => {
    return (
        <div className="container">
            <div className="data">

            {/* carousel container for image slider */}
                <div className="image-slider">
                    <div className="image">
                     <Carousel data={slides}/>
                    </div>
                </div>

                {/* right side part  */}
                <div className="info">
                    <span className='font-name'>Neue Helvetica</span>
                    <p>Neue Helvetica font family was designe by Neue Helvetica font family <br />was designe by Neue Helvetica font family was designe by Neue Helvetica font <br />family was designe by Neue Helvetica font <br />family was designe by </p>
                    <span className='price'>Get complete at $500.00 $460.99</span>
                    <div className="buttons">
                        <button className='addbtn'>Add family to cart</button>
                        <button className='subscription'>Explore subscription plans</button>
                    </div>
                    <div className='exp'>
                    <p>
                        Explore our subcription plans starting at $99/-
                    </p>
                    <p>
                        Get the first download free & monthly access to many free assets.
                    </p>
                    <p>save big on your font needs</p>
                    </div>
                </div>
            </div>
             <RelatedTags/>
        </div>
    )
}

export default FontData