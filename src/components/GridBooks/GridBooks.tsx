import React from 'react'
import "./styles.css"

interface GridBooksProps {
    children: React.ReactNode
}

export default function GridBooks({ children }: GridBooksProps) {
    return (
        <div className="grid-books">{children}</div>
    )
}
