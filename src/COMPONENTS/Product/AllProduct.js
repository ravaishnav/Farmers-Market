import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/Products/1.png'
import img2 from '../../ASSETS/Products/2.png'
import img3 from '../../ASSETS/Products/3.png'
import img4 from '../../ASSETS/Products/4.png'
import img5 from '../../ASSETS/Products/5.png'
import img6 from '../../ASSETS/Products/6.png'
import './AllProduct.css'
const AllProduct = () => {
    const products = [
        {
            "ProductId": 1,
            "ProductName": "House Cleaning",
            "ProductDescription": "Ditergent was daily used in all the house.",
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
                    "Name": "pradeesh",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-12-10",
                    "Review": "very nice and the product comes at correct time.",
                },
                {
                    "ReviewId": 2,
                    "Name": "kumaran",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2023-11-30",
                    "Review": "easy to buy the product.",
                },
                {
                    "ReviewId": 3,
                    "Name": "akshay",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "the product is very good.",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Dairy",
            "ProductDescription": "for All People Dairy product are most important.",
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
            "ProductColor": "Color 2",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 100,
            "ProductUnit": "Unit 1",
            "ProductPrice": 150,
            "SalesPrice": 125,
            "ProductDiscount": 25,
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
                    "Name": "thiru",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-12-09",
                    "Review": ".",
                },
                {
                    "ReviewId": 2,
                    "Name": "raja",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2023-12-15",
                    "Review": ".",
                },
                {
                    "ReviewId": 3,
                    "Name": "mani",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2023-12-22",
                    "Review": ".",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Vegetables",
            "ProductDescription": "Fresh and Natural",
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
                }
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
                    "Name": " Mani",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-12-11",
                    "Review": "It is agod product to buy.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Vimal",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-12-21",
                    "Review": "",
                },
                {
                    "ReviewId": 3,
                    "Name": " Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2023-08-01",
                    "Review": "",
                }
            ]
        },
        {
            "ProductId": 4,
            "ProductName": "Meat",
            "ProductDescription": "All Meat are Available",
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
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-9-21",
                    "Review": "",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2023-12-31",
                    "Review": "",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2023-10-11",
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
                    "Name": " Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-11-01",
                    "Review": ".",
                },
                {
                    "ReviewId": 2,
                    "Name": "Vinai",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2023-08-01",
                    "Review": ".",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2023-08-11",
                    "Review": ".",
                }
            ]
        },
        {
            "ProductId": 6,
            "ProductName": "Grocery",
            "ProductDescription": ".",
            "ProductImage": [
                {
                    id: 6,
                    image: img6
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
                    "Name": "Harshal",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2023-08-01",
                    "Review": "Most over rated product",
                },
                {
                    "ReviewId": 2,
                    "Name": "Vikesh",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2023-12-11",
                    "Review": ".",
                },
                {
                    "ReviewId": 3,
                    "Name": "vinu",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2023-12-01",
                    "Review": ".",
                }
            ]
        },
        
    ]
    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    products.map((item,index) => {
                        return (
                            <ProductCard data={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct