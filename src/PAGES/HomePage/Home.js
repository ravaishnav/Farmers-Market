import React from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import img6 from '../../ASSETS/Images/6.png'
import ProductsSlider from '../../COMPONENTS/Product/ProductsSlider'


const Home = () => {

  const products = [
    {
        "ProductId": 1,
        "ProductName": "House Cleaning",
        "ProductDescription": "",
        "ProductImage": [
            {
                id: 1,
                image: img1
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            },
            {
                id: 6,
                image: img6
            },
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": " David",
                "Email": "",
                "Rating": 5,
                "Date": "2023-12-11",
                "Review": "",
            },
            {
                "ReviewId": 2,
                "Name": "Vishnu",
                "Email": "",
                "Rating": 1,
                "Date": "2023-08-21",
                "Review": ".",
            },
            {
                "ReviewId": 3,
                "Name": "vimal",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": ".",
            }
        ]
    },
    {
        "ProductId": 2,
        "ProductName": "Dairy",
        "ProductDescription": "",
        "ProductImage": [
            {
                id: 1,
                image: img2
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            },
            {
                id: 6,
                image: img6
            },
        ],
        "ProductCode": "P2",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 4,
                "Name": "Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2023-11-21",
                "Review": "",
            },
            {
                "ReviewId": 5,
                "Name": "giri",
                "Email": "",
                "Rating": 1,
                "Date": "2023-12-26",
                "Review": "",
            },
            {
                "ReviewId": 3,
                "Name": " Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2023-10-21",
                "Review": "",
            }
        ]
    },
    {
        "ProductId": 3,
        "ProductName": "Vegetables",
        "ProductDescription": "",
        "ProductImage": [
            {
                id: 1,
                image: img3
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            },
            {
                id: 6,
                image: img6
            },
        ],
        "ProductCode": "P3",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 70,
        "ProductDiscount": 30,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal",
                "Email": "",
                "Rating": 5,
                "Date": "2023-11-21",
                "Review": "",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2023-12-30",
                "Review": "",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2023-12-21",
                "Review": "",
            }
        ]
    },
    {
        "ProductId": 4,
        "ProductName": "Meat",
        "ProductDescription": "",
        "ProductImage": [
            {
                id: 4,
                image: img4
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            },
            {
                id: 4,
                image: img4
            },
            {
                id: 5,
                image: img5
            },
            {
                id: 6,
                image: img6
            },
        ],
        "ProductCode": "P4",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harish",
                "Email": "",
                "Rating": 5,
                "Date": "2023-11-11",
                "Review": "",
            },
            {
                "ReviewId": 2,
                "Name": "Vimal raj",
                "Email": "",
                "Rating": 1,
                "Date": "2023-12-17",
                "Review": "",
            },
            {
                "ReviewId": 3,
                "Name": "Hari",
                "Email": "",
                "Rating": 4,
                "Date": "2023-11-24",
                "Review": "",
            }
        ]
    },
    {
        "ProductId": 5,
        "ProductName": "Fruits",
        "ProductDescription": "",
        "ProductImage": [
            {
                id: 5,
                image: img5
            },
            
        ],
        "ProductCode": "P5",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": " Jai",
                "Email": "",
                "Rating": 5,
                "Date": "2023-08-01",
                "Review": "",
            },
            {
                "ReviewId": 2,
                "Name": "Vaishnav",
                "Email": "",
                "Rating": 1,
                "Date": "2023-12-12",
                "Review": "",
            },
            {
                "ReviewId": 3,
                "Name": "varnav",
                "Email": "",
                "Rating": 4,
                "Date": "2023-12-19",
                "Review": "",
            }
        ]
    },
    {
        "ProductId": 6,
        "ProductName": "Grocery",
        "ProductDescription": "",
        "ProductImage": [
            {
                id: 6,
                image: img6
            },
           
        ],
        "ProductCode": "P6",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 70,
        "ProductDiscount": 30,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "yuvanav",
                "Email": "",
                "Rating": 5,
                "Date": "2023-12-31",
                "Review": "",
            },
            {
                "ReviewId": 2,
                "Name": "abhinav",
                "Email": "",
                "Rating": 1,
                "Date": "2023-08-11",
                "Review": "",
            },
            {
                "ReviewId": 3,
                "Name": "vinai",
                "Email": "",
                "Rating": 4,
                "Date": "2023-08-01",
                "Review": "",
            }
        ]
    }
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <Footer1 />

      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Related Products' />
      </div>
      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Explore More' />
      </div>
      <Footer2 />
    </div>
  )
}

export default Home