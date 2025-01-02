"use client"
import IconBook from '../../assets/icons/book.svg'
import SideMenu from '../SideMenu/SideMenu'
import Iten from '../SideMenu/Iten/Iten'
import React from 'react'
import './styles.css'

interface NavigationProps {
    theme: string
}

export default function Navigation({ theme }: NavigationProps) {
    return (
        <div className={`navigation ${theme === ' dark' ? 'bg - gray - 800 text - white' : 'bg - gray - 100 text - black'}`} >
            <SideMenu theme={theme}>
                <Iten icon={IconBook}>Meus livros</Iten>
            </SideMenu>
            <div>
                pagina em questão
            </div>
        </ div >
    )
}
