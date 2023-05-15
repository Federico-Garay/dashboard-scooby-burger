import React from 'react'
import { Link } from 'react-router-dom'
import burger from './lib/images/burger.jpg'
import cheeseBurger from './lib/images/cheeseBurger.jpg'
import americanBurger from './lib/images/americanBurger.jpg' 
import californiaBurger from './lib/images/californiaBurger.jpg'
import killerBurger from './lib/images/killerBurger.jpg'

const productListData = [
  {
      id: '1',
      product_id: '01',
      product_name: 'Hamburguesa',
      product_price: '$2200',
      product_image: burger,
      product_detail: 'Lechuga + Carne + Tomate + Cheddar'
  },
  {
      id: '2',
      product_id: '02',
      product_name: 'Cheese Burger',
      product_price: '$2300',
      product_image: cheeseBurger,
      product_detail: 'Cheddar x4 + Carne x2'
  },
  {
      id: '3',
      product_id: '03',
      product_name: 'American Burger',
      product_price: '$2100',
      product_image: americanBurger,
      product_detail: 'Cheddar x2 + Bacon x2 + Carne x2'
  },
  {
      id: '4',
      product_id: '04',
      product_name: 'California Burger',
      product_price: '$2800',
      product_image: californiaBurger,
      product_detail: 'Cheddar + Cebolla caramelizada + Carne x2'
  },
  {
      id: '5',
      product_id: '05',
      product_name: 'Killer Burger',
      product_price: '$2500',
      product_image: killerBurger,
      product_detail: 'Queso + Bacon + Carne x3'
  }
]

function LastProduct() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
        <strong className='text-gray-700 font-medium'>Últimos productos</strong>
        <div className='mt-4 flex flex-col gap-3'>
          {productListData.map(product => (
            <Link to={`/products/${product.id}`} className='flex hover:no-underline'>
              <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm'>
                <img 
                  className='w-full h-full object-cover rounded-sm overflow-hidden'
                  src={product.product_image}
                  alt={product.product_name} 
                />
              </div>
              <div className='ml-4 flex-1'>
                <p className='text-sm text-gray-800'>{product.product_name}</p>
                <span className={`text-sm font-medium`}>{product.product_detail}</span>
              </div>
              <div className='text-xs text-gray-400 pl-2'>{product.product_price}</div>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default LastProduct
