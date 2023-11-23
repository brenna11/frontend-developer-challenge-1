'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

const Footer = () => {
   const { theme } = useTheme();

   return (
     <footer className={`text-white py-4 ${theme === 'dark' ? 'bg-black' : 'bg-primary'}`}>
       <div className="container mx-auto flex justify-between items-center">
         {/* Version */}
         <div className="text-sm">
           <p>Version 1.0.0</p>
         </div>
 
         {/* Group Links */}
         <div className="flex space-x-4">
           <Link legacyBehavior href="/privacy" className="hover:text-gray-300">Privacy</Link>
           <Link legacyBehavior href="/terms" className="hover:text-gray-300">Terms of Use</Link>
           <Link legacyBehavior href="/help" className="hover:text-gray-300">Help Center</Link>
         </div>
 
         {/* Copyright */}
         <div className="text-sm">
           <p>❥ Created by <strong>brenna11</strong></p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;
 