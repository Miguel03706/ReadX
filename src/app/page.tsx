"use client"
import Navigation from "@/components/Navigation/Navigation";
import { useTheme } from "@/contexts/Theme/ThemeProvider";
import GridBooks from './../components/GridBooks/GridBooks';
import AddBook from "@/components/AddBook/AddBook";

export default function Inicio() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
        }`}
    >
      <div>
        <Navigation theme={theme} >
          <div className="p-4">
            <h1 className="text-2xl font-bold">
              <div className="flex justify-center align-center">
                <AddBook />
              </div>
              <GridBooks>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
              </GridBooks>
            </h1>
          </div>
        </Navigation>
      </div>
    </div>
  );
} 
