import React from 'react'
import Image, { StaticImageData } from 'next/image'
import './styles.css'
import Link from 'next/link'

interface ItemProps {
    icon: StaticImageData
    children: React.ReactNode
}

export default function Iten({ icon, children }: ItemProps) {
    return (
        <div className='iten'>
            <div className='icon'>
                <Image src={icon} alt='' className='icon' />
            </div>
            <div className='name'>
                <Link href={`/${children}`}>
                    {children}
                </Link>
            </div>
        </div >
    )
}
