
import Link from 'next/link';
import ShareBtn from '../components/ShareBtn';
import ProductCard from '../components/ProductCard';
import {getProducts} from "../services/productService"

const Page = async() => {
  
const products= await getProducts(5)
   
  return (
    <div>
      {/* banner */}
     <div className='bg-gray-900 h-72'>
      <h1 className='text-white text-center text-5xl font-bold pt-20'> Jewellery<span className='text-blue-400'> Collection</span> </h1>
     </div>
     {/* cards */}
     <div className='m-4 flex flex-wrap gap-2'>
      {products.data.map(item=> <ProductCard item={item}/> )}
     

     </div>
     <Link href="/products" className='inline-block text-blue-950 font-bold hover:underline'>View All {">"}</Link>
    </div>
  )
}

export default Page;