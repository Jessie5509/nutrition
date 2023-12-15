import React from 'react'

export const NavBar = () => {
    return (
        <nav className='flex justify-center flex-row h-20'>
            <ul className='flex items-center text-lg text-white uppercase font-bold nav-ts'>
                <li className='mr-7 hover:animate-bounce font-main'>Me</li>
                <li className='mr-7 hover:animate-bounce font-main'>Services</li>
                <li className='mr-7 hover:animate-bounce font-main'>Recipes</li>
                <li className='mr-7 hover:animate-bounce font-main'>Contact me</li>
            </ul>
        </nav>
    )
}

export default NavBar
