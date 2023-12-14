import React from 'react'

export const NavBar = () => {
    return (
        <nav className='flex justify-center flex-row h-20'>
            <ul className='flex items-center text-lg text-white uppercase font-bold'>
                <li className='mr-7 animate-bounce font-mono'>Me</li>
                <li className='mr-7 animate-bounce font-mono'>Services</li>
                <li className='mr-7 animate-bounce font-mono'>Recipes</li>
                <li className='mr-7 animate-bounce font-mono'>Contact me</li>
            </ul>
        </nav>
    )
}

export default NavBar
