import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        heading="Terms & Conditions"
      />


      <div className='pgcont1'>
        <h3>prices</h3>
        <p>All pricing on purchase orders is final. Buyer does not acknowledge any written confirmation with pricing changes until a purchase order revision is completed and provided to seller.</p>
      </div>
      <div className='pgcont1'>
        <h3> Purchase Order Changes</h3>
        <p>If Seller’s costs are reduced because of changes, Seller shall reduce the purchase order price to reflect all such quantifiable cost savings, whether direct or indirect.</p>
      </div>

      <div className='pgcont1'>

        <h3>Payment Terms</h3>
        <p>Seller shall invoice Buyer on completed delivery of the Goods or Services. Unless otherwise agreed to in writing, the Buyer’s payment terms are 45 days following the date Buyer receives an accurate and complete invoice, payable in the currency as stated on the purchase order.</p>
      </div>

      <div className='pgcont1'>
        <h3>Shipping Charges</h3>
        <p>Taxes. All shipping and handling charges are included in the price. Seller shall pack, mark and ship Products in accordance with sound commercial practices and Seller’s specifications in such a manner as to prevent damage during transport and shall be clearly marked as destined for Buyer</p>
      </div>

      <div className='pgcont1'>
        <h3>Returned or Rejected Products.</h3>
        <p>Buyer shall inspect all Products and Services within a reasonable time after receipt and shall be deemed to accept such Products or Services unless it gives Seller written notice of any defect or non-conformity within a reasonable time after inspection.</p>
      </div>

      <div className='pgcont1'>
        <h3>Cancellation.</h3>
        <p>Buyer may immediately cancel the purchase order, without liability to Seller, in the event of any of the following or any other similar occurrences: (i) insolvency of the Seller</p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions