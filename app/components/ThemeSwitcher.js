'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();


   useEffect(() => {
      setMounted(true);
   }, []);


   if (!mounted) {
      return null;
   }


   return (
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
         <label className="cursor-pointer">
            {theme === "dark" ? <FaMoon /> : <FaSun />}
         </label>
      </button>
   )
};