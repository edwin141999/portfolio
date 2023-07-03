'use client';
import BtnRainbow from "../components/btnRainbow";
import ScrollLink from "../components/scrollLink";

export default function Header() {
  const handleScroll = (e, mouseEvent) => {
    e.preventDefault();
    const targetId = 'about'
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="w-full h-screen flex flex-col justify-center px-10 md:px-24 pt-5">
      <nav className="flex-1">
        <ul className="flex flex-row font-semibold w-auto gap-10 justify-center md:justify-start">
          <ScrollLink href={'#about'} text={'About'} />
          <ScrollLink href={'#projects'} text={'Projects'} />
          <ScrollLink href={'#contact'} text={'Contact'} />
        </ul>
      </nav>
      <section className="flex-auto font-bold text-4xl md:text-6xl space-y-4 cursor-default">
        <p>Hi, my name is <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">Edwin</span></p>
        <p>Im a software engineer.</p>
        <BtnRainbow border={'borderbtn text-lg md:text-2xl px-5'} text={'Know more'} onClick={handleScroll} />
      </section>
    </header>
  )
}