import React from 'react'
import './styles.css'

export default function SideMenu({ children }: { children: React.ReactNode }) {
    return (
        <div className='iten-list'>{children}</div>
    )
}
