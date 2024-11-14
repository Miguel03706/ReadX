import React from 'react'

export default function ({ theme, changeTheme }: { theme: string, changeTheme: () => void }) {
    return (
        <div>
            <button
                className='Toggle'
                onClick={() => changeTheme}
            >
                {theme === 'light' ? '🌞' : '🌜'}
            </button>
        </div>
    )
}
