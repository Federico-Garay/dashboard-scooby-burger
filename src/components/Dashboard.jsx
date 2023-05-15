import React from 'react'
import SmallCards from './SmallCards'
import ProductList from './ProductList'
import LastProduct from './LastProduct'
import Categories from './Categories'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <SmallCards />
      <div className='flex flex-row gap-4 w-full'>
        <ProductList />
        <LastProduct />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <Categories />
      </div>
    </div>
  )
}
