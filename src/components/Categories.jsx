import React from 'react'

const productListData = [
    {
        id: '01',
        categories: 'Hamburguesa de carne',
        product_name: 'American Burger - Cheese Burger'
    },
    {
        id: '02',
        categories: 'Hamburguesa vegana',
        product_name: 'NOT Burger'
    },
    {
        id: '03',
        categories: 'Hamburguesa de pollo',
        product_name: 'Crispy Burger'
    }
]

const Categories = () => {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200'>
        <strong className='text-gray-700 font-medium'>Categorías</strong>
        <div className='mt-3'>
            <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Categoria</td>
                        <td>Nombre del producto</td>
                    </tr>
                </thead>
                <tbody>
                    {productListData.map((order) => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{order.categories}</td>
                            <td>{order.product_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Categories
