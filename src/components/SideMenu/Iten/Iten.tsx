import React from 'react'
import Image, { StaticImageData } from 'next/image'
import './styles.css'
import Link from 'next/link'

interface ItemProps {
    icon: StaticImageData
    children: React.ReactNode
    redirect?: string
}

export default function Iten({ icon, children, redirect }: ItemProps) {
    return (
        <div className='iten'>
            <div className='icon'>
                <Image src={icon} alt='' className='icon' />
            </div>
            <div className='name'>
                <Link href={`/${redirect}`}>
                    {children}
                </Link>
            </div>
        </div >
    )
}
