"use client"
export const themeFunctions = {
    changeTheme: (theme: string) => {
        window.localStorage.setItem('theme', theme)
    },
    getTheme: () => {
        const color = window.localStorage.getItem('theme') || 'light'
        return color;
    }
}