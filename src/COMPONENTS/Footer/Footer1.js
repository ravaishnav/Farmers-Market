import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Fresh and Natural Farm Products & Grocery at your doorstep
                </h1>
                <p>We deliver fresh vegetables fruits & Grocery at your doorstep.
                    We deliver fresh vegetables Meat & All Grocery Things at your doorstep.
                </p>
            </div>
        </div>
    )
}

export default Footer1