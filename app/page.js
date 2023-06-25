import Image from "next/image";
import About from "./about/page";
import Header from "./header/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-5">
      <Header />
      <About />
      <section className="flex flex-col px-20 py-5 min-h-screen">
        <h2 className="text-4xl font-bold text-center">PROJECTS</h2>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">Project 1</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum architecto ipsam rem. Ipsam, dignissimos aspernatur nam consequatur dolores unde corporis! Ut, quidem? Magnam nemo autem tempore numquam commodi quasi ut.</p>
            <div className="flex flex-row text-sm font-bold space-x-3">
              <button className="px-5 py-0.5 borderbtn">
                <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">See Project</span>
              </button>
              <button className="px-5 py-0.5 borderbtn">
                <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">Source Code</span>
              </button>
            </div>
          </div>
          <Image src="/spiderman.jpg" width={200} height={200} alt="project image" />
        </div>
      </section>
      <footer>
        <h2>CONTACT</h2>
        <div>
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <p>Message</p>
          <input type="text" />
          <button>Send</button>
        </div>
      </footer>
    </main>
  )
}
