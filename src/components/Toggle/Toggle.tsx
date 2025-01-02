"use client"
import { useTheme } from "@/contexts/Theme/ThemeProvider";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 border rounded"
            style={{
                backgroundColor: theme === 'dark' ? '#333' : '#fff',
                color: theme === 'dark' ? '#fff' : '#000',
            }}
        >
            {theme === 'dark' ? '☀️' : '🌑'}
        </button>
    );
}
