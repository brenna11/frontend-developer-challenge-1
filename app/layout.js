import { Jost } from 'next/font/google'
import './styles/globals.css'
import { ThemeProvider } from './theme-provider';
import Menu from './components/Menu';
import Footer from './components/Footer';

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Prepr - Explore Page',
  description: 'PreprLabs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-slate-50 dark:bg-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Menu />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
