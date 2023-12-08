import React from 'react'

export const NavBar = () => {
    return (
        <nav className='flex justify-center flex-row h-20 bg-[#282c34]'>
            <ul className='flex items-center text-lg text-white uppercase font-bold'>
                <li className='mr-7'>Me</li>
                <li className='mr-7'>Recipes</li>
                <li className='mr-7'>Services</li>
                <li className='mr-7'>Contact me</li>
            </ul>
        </nav>
    )
}
