import React from 'react'
import { CiBurger } from "react-icons/ci";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-violet-400 hover:no-underline active:bg-neutral-400 rounded-tr-lg rounded-br-lg'

export default function SideBar() {
  return (
    <div className='bg-violet-600 w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <CiBurger fontSize={24} />
            <span className='text-white text-lg'>ScoobyBurger</span>
        </div>
        <div className='flex-1 py-4 flex flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item =>(
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
    </div>
  )
}

function SidebarLink ({item}){
  const { pathname } = useLocation()

  return(
    <Link to={item.path} className={classNames(
          pathname === item.path ? 'text-white bg-neutral-950' : 'text-neutral-200' , 
          linkClasses
        )}
      >
        <span className='text-xl'>{item.icon}</span>
        {item.label}
    </Link>
  )
}
