import React from 'react'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import img6 from '../../ASSETS/Images/6.png'
import img7 from '../../ASSETS/Images/7.png'
import img8 from '../../ASSETS/Images/8.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'House Cleaning'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Diary'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Vegetables'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Meat'
        },
        {
            id: 5,
            categoryimage: img5,
            categoryname: 'Fruits'
        },
        {
            id: 6,
            categoryimage: img6,
            categoryname: 'Grocery'
        },
        {
            id: 7,
            categoryimage: img7,
            categoryname: 'Fresh Juice'
        },
        {
            id: 8,
            categoryimage: img8,
            categoryname: 'MilkShake'
        },
     
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar