"use client"
import IconBookDark from '../../assets/icons/book-outline.svg'
import IconBookLight from '../../assets/icons/book.svg'
import SideMenu from '../SideMenu/SideMenu'
import Iten from '../SideMenu/Iten/Iten'
import React from 'react'
import './styles.css'

interface NavigationProps {
    theme: string
}

export default function Navigation({ theme }: NavigationProps) {
    return (
        <div className='navigation'>
            <SideMenu>
                <Iten icon={theme === "light" ? "" : ""}>Meus livros</Iten>
            </SideMenu>
            <div>
                pagina em questão
            </div>
        </div>
    )
}
