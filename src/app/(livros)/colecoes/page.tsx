"use client"
import Navigation from "@/components/Navigation/Navigation";
import { useTheme } from "@/contexts/Theme/ThemeProvider";

export default function Favoritos() {
    const { theme } = useTheme();

    return (
        <div
            className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                }`}
        >
            <div>
                <Navigation theme={theme} >
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Coleções</h1>
                    </div>
                </Navigation>
            </div>
        </div>
    );
} 
