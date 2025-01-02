"use client"
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import Navigation from "@/components/Navigation/Navigation";

import { useTheme } from "@/contexts/Theme/ThemeProvider";

export default function Inicio() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
        }`}
    >
      <div>
        <HeaderMenu theme={theme} />
        <Navigation theme={theme} />
      </div>
    </div>
  );
} 
