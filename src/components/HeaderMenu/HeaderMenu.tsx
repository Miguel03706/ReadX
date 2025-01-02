import React from 'react'
import './styles.css'
import ThemeSwitcher from '../Toggle/Toggle'

interface HeaderMenuProps {
    theme: string
}

export default function HeaderMenu({ theme }: HeaderMenuProps) {
    return (

        <div className={`header-menu border-b-2 ${theme === ' dark' ? 'bg - gray - 800 text - white' : 'bg - gray - 100 text - black'}`}>
            <div className='logo' ></div>
            <div className=''><ThemeSwitcher /></div>
            <div className='user-info'></div>
        </div >
    )
}
