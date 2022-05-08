import React from 'react'

const Product = ({product_name, product_price, product_description, product_image}) => {
  return (
    <div className=' w-48 md:w-64 border-2 rounded-lg m-2'>
        <img className='w-full object-contain' src={product_image} />
       
        <div className='flex items-center m-4 text-sm md:text-lg'>
            <div className='flex-initial flex-1 break-all'>
                <p className='mb-4'> {product_name} </p>
                <p>{product_description} </p>
            </div>

            <p className='ml-8 break-all font-medium'> {product_price} :-</p>
        </div>
    </div>
  )
}

export default Product