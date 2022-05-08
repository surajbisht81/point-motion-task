import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const Home = () => {

  const data = useSelector((state) => state.appReducer)

  return (
    <div className={data.length > 0 ? `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto px-8 sm:px-16` : `flex justify-center items-center text-3xl font-bold my-10`} >
        {
            data.length > 0 ? 
            (
              data.map((item) => {
                return(
                  <Product key={item.id} product_name={item.product.product_name} product_price={item.product.product_price} product_description={item.product.product_description} product_image={item.product.product_image} />
                )
              })
            )
            :
            <h1>OOPS No Product to show. Add Products in the Manage Products section</h1>
        }
    </div>
  )
}

export default Home