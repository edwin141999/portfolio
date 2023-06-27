import BtnRainbow from "../components/btnRainbow";

export default function Header() {
  return (
    <header className="w-full h-screen flex flex-col justify-center px-24 pt-5">
      <nav className="flex-1">
        <ul className="flex flex-row font-semibold w-auto gap-10 cursor-pointer">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className="flex-auto font-bold text-6xl space-y-4 cursor-default">
        <p>Hi, my name is <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">Edwin</span></p>
        <p>Im a software engineer.</p>
        <BtnRainbow border={'borderbtn text-2xl px-5'} text={'Know more'} />
      </section>
    </header>
  )
}