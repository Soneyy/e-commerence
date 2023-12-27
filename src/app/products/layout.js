import Link from "next/link"
export default function RootLayout({ children }) {
    return (
       <div>
       <Link href="/products" className='inline-block text-blue-950 font-bold hover:underline'>All Products {">"}</Link>
   
       {children}
       </div>
     )
   }
   