import React from 'react'
import { 
    RiSearchEyeLine,
    RiNotification3Line
} from 'react-icons/ri'
import { Popover, Transition, Menu} from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className='bg-violet-300 h-16 px-4 flex justify-between items-center border-b border-gray-400'>
        <div className='relative'>
            <RiSearchEyeLine fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2'/>
            <input 
                type="text" 
                placeholder='Buscar...' 
                className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] rounded-tr-lg rounded-br-lg border border-gray-300 pl-8 pr-4'/>
        </div>
        <div className='flex items-center gap-2 mr-2'>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={classNames(
                                open && 'bg-gray-100',
                                'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-400'
                            )}
                        >
                            <RiNotification3Line fontSize={24} />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0 translate-y-1'
                            enterTo='opacity-100 translate-y-0'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                        >
                            <Popover.Panel className='absolute right-0 z-10 nt-2.5 w-80'>
                                <div className='bg-white rounded-sn shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                                    <strong className='text-gray-700 font-medium'>Notificaciones</strong>
                                    <div className='mt-2 py-1 text-sn'>Este es el panel de notificaciones.</div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
            <Menu as="div" className="relative">
                <div className='inline-flex'>
                    <Menu.Button 
                        className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600">
                        <span className='sr-only'>Abrir menú de usuario</span>
                        <div
                            className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                            style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}
                        >
                            <span className='sr-only'>Huck Jackson</span>
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div 
                                        className={classNames(
                                            active && 'bg-gray-100', 
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer round-sm px-4 py-2'
                                        )} 
                                        onClick={()=> navigate('/perfil')}
                                    >
                                        Tu perfil
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div 
                                        className={classNames(
                                            active && 'bg-gray-100', 
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer round-sm px-4 py-2'
                                        )} 
                                        onClick={()=> navigate('/perfil')}
                                    >
                                        Opciones
                                    </div>
                                )}
                            </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
        </div>
    )
}
