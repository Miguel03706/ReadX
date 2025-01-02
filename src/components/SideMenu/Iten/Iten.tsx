import React from 'react'
import './styles.css'

interface ItemProps {
    icon: React.ReactNode
    children: React.ReactNode
}

export default function Iten({ icon, children }: ItemProps) {
    return (
        <div className='iten'>
            <div className='icon'>
                {icon}
            </div>
            <div className='name'>{children}</div>
        </div>
    )
}
