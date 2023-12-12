'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BtnRainbow from "../components/btnRainbow";
import ScrollLink from "../components/scrollLink";

export default function Header() {
  const handleScroll = (e, mouseEvent) => {
    e.preventDefault();
    const targetId = 'about'
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" })
  }

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    if (theme === 'dark') {
      return (
        <div className="flex text-yellow-500 gap-5 border-2 border-yellow-500  px-2 py-1 rounded-md" role="button" onClick={() => setTheme('light')}>
          <p className="hidden md:flex">Modo Claro</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </div>
      )
    } else {
      return (
        <div className="flex text-gray-900 gap-5 border-2 border-gray-900 px-2 py-1 rounded-md" role="button" onClick={() => setTheme('dark')} >
          <p className="hidden md:flex">Modo Oscuro</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </div>
      )
    }
  }

  return (
    <header className="w-full h-screen flex flex-col px-10 md:px-24 pt-5 bg-white dark:bg-slate-900">
      <nav className="flex flex-row items-center justify-around md:justify-between">
        <ul className="flex flex-row flex-1 md:flex-none md:gap-10 font-semibold justify-around">
          <ScrollLink href={'#about'} text={'Sobre mi'} />
          <ScrollLink href={'#projects'} text={'Proyectos'} />
          <ScrollLink href={'#contact'} text={'Contacto'} />
        </ul>
        {renderThemeChanger()}
      </nav>
      <section className="font-bold text-4xl md:text-6xl space-y-4 cursor-default dark:text-white flex flex-col h-screen justify-center">
        <p>Hola, mi nombre es <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">Edwin</span></p>
        <p className="md:w-2/3 leading-none md:leading-tight">Soy Ingeniero en Desarrollo de Software</p>
        <div>
          <BtnRainbow border={'borderbtn text-lg md:text-2xl px-5'} text={'Conocer más'} onClick={handleScroll} />
        </div>
      </section>
    </header>
  )
}