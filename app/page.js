import About from "./about/page";
import Header from "./header/page";
import Projects from "./sections/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-5">
      <Header />
      <About />
      <Projects />
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
