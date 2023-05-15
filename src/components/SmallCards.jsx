import React from 'react'
import { 
    RiShoppingCartFill,
    RiFileUserFill,
    RiTodoFill
} from "react-icons/ri";

function SmallCards(){
  return (
    <div className='flex gap-4 w-full'>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <RiShoppingCartFill className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sn text-gray-500 font-light'>Total de productos</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>21</strong>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
                <RiFileUserFill className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sn text-gray-500 font-light'>Total de usuarios</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>21</strong>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
                <RiTodoFill className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-sn text-gray-500 font-light'>Total de categorías</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>21</strong>
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}

export default SmallCards

function BoxWrapper({ children }) {
    return(
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
    )
}