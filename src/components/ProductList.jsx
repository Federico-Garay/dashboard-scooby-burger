import React from 'react'
import { Link } from 'react-router-dom'

const productListData = [
    {
        id: '1',
        product_id: '01',
        product_name: 'Hamburguesa',
        product_price: '$2200'
    },
    {
        id: '2',
        product_id: '02',
        product_name: 'Cheese Burger',
        product_price: '$2300'
    },
    {
        id: '3',
        product_id: '03',
        product_name: 'American Burger',
        product_price: '$2100'
    },
    {
        id: '4',
        product_id: '04',
        product_name: 'California Burger',
        product_price: '$2800'
    },
    {
        id: '5',
        product_id: '05',
        product_name: 'Killer Burger',
        product_price: '$2500'
    }
]

function ProductList() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 '>
        <strong className='text-gray-700 font-medium'>Listado de productos</strong>
        <div className='mt-3'>
            <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product ID</td>
                        <td>Product Name</td>
                        <td>Product Price</td>
                    </tr>
                </thead>
                <tbody>
                    {productListData.map((order) => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>
                                <Link to={`/product/${order.product_id}`}>{order.product_id}</Link>
                            </td>
                            <td>{order.product_name}</td>
                            <td>{order.product_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductList
