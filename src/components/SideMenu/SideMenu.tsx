import React from 'react'
import './styles.css'

interface SideMenuProps {
    children: React.ReactNode
    theme: string
}

export default function SideMenu({ children, theme }: SideMenuProps) {

    return (
        <div className={`iten-list border-2 border-t-0 ${theme === ' dark' ? 'bg - gray - 800 text - white' : 'bg - gray - 100 text - black'}`}>
            {children}
        </div>
    )
}
