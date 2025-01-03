"use client"
import IconBook from '../../assets/icons/book.svg'
import IconReadingNowLight from '../../assets/icons/reading_now.svg'
import IconReadingNowDark from '../../assets/icons/reading_now_dark.svg'
import IconFavoriteBookLight from "../../assets/icons/book_favorite.svg"
import IconFavoriteBookDark from "../../assets/icons/book_favorite_dark.svg"
import IconMyBooksLight from "../../assets/icons/book_my_books.svg"
import IconMyBooksDark from "../../assets/icons/book_my_books_dark.svg"
import SideMenu from '../SideMenu/SideMenu'
import Iten from '../SideMenu/Iten/Iten'
import React from 'react'
import './styles.css'
import HeaderMenu from '../HeaderMenu/HeaderMenu'

interface NavigationProps {
    theme: string
    children: React.ReactNode
}

export default function Navigation({ theme, children }: NavigationProps) {
    return (
        <div>
            <HeaderMenu theme={theme} />

            <div className={`navigation ${theme === ' dark' ? 'bg - gray - 800 text - white' : 'bg - gray - 100 text - black'}`} >
                <SideMenu theme={theme}>
                    <Iten
                        icon={theme === "light" ? IconReadingNowLight : IconReadingNowDark}
                        redirect="">
                        Lendo agora
                    </Iten>
                    <Iten icon={theme === "light" ? IconFavoriteBookLight : IconFavoriteBookDark} redirect='favoritos'>Favoritos</Iten>
                    <Iten icon={theme === "light" ? IconMyBooksLight : IconMyBooksDark} redirect='livros'>Meus livros</Iten> { /* permitir criar coleções de livros */}
                    <Iten icon={IconBook} redirect='ler'>Para ler</Iten>
                    <Iten icon={IconBook} redirect='finalizados'>Finalizados</Iten>
                    <Iten icon={IconBook} redirect='colecoes'>Coleções</Iten>
                </SideMenu>
                <div>
                    {children}
                </div>
            </ div >
        </div>
    )
}
