import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
        heading="Privacy Policy"
      />
      <div className='pgcont1'>
        <h3>What is fresh vegetable?</h3>
        <p>fresh vegetable means directly imported from farmers.</p>
      </div>
      <div className='pgcont1'>
        <h3>Where does it come from?</h3>
        <p> farmers.</p>
      </div>

      <div className='pgcont1'>

        <h3>Where can I get ?</h3>
        <p>From our Shop</p>
      </div>

      <div className='pgcont1'>
        <h3>Why do we use it?</h3>
        <p>For god health</p>
      </div>

      <div className='pgcont1'>
        <h3>The fresh vegetable and grocery</h3>
        <p>Is a Multiproduct Shopping her you can buy all your needed Things</p>
      </div>

      <div className='pgcont1'>
        <h3></h3>
        <p></p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default PrivacyPolicy