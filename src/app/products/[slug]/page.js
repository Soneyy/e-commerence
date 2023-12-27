import React from 'react'
import {CheckIcon} from '@heroicons/react/outline'
import ShareBtn from '../../../components/ShareBtn'
import AddCart from '../../../components/AddCart'
import { getProductbyId } from '../../../services/productService'
import { formatAmount } from '../../../utils/stripe'

const Product1 =  async ({params:{slug}}) => {

  const product = await getProductbyId(slug)
   
  return (
    <div className='m-2 px-20'>
    <div className='flex justify-around items-center flex-wrap'>
        <div className='w-80 h-80'>
        <img
        src={product.images[0]} 
        className='w-full h-auto'/>
      </div>
      <div className='flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white'>
        <h2 className='text-3xl font-semibold'>{product.name}</h2>
        <div className='flex pt-2 gap-2'>
          <CheckIcon className='text-lime-500 w-5 h-5'/>
          <span className='font-semibold'>In Stock</span>
          <ShareBtn/>
        </div>
        <div className='mt-4 border-t pt-4'>
          <p className='text-gray-500'>Price:</p>
          <p className='text-xl font-semibold'>{formatAmount(product.default_price.unit_amount)} </p>
          
        </div>
        <AddCart/>
      </div>
    </div>
    <p className='mt-8 text-2xl'>
      {product.description}
    </p>
    </div>
  )
}

export default Product1