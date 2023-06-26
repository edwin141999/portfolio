import About from "./about/page";
import Header from "./header/page";
import Projects from "./sections/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <Header />
      <About />
      <Projects />
      <footer className="min-h-screen min-w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white flex flex-col justify-center py-10">
        <h2 className="text-4xl font-bold text-center">CONTACT</h2>
        <div className="bg-white rounded-md text-black m-auto px-8 space-y-2 py-4 flex flex-col">
          <p className="font-bold">Name</p>
          <input
            type="text"
            className="border-2 rounded-md px-2"
            placeholder="Enter your name"
          />
          <p className="font-bold">Email</p>
          <input
            type="text"
            className="border-2 rounded-md px-2"
            placeholder="Enter your email address"
          />
          <p className="font-bold">Message</p>
          <input
            type="text"
            className="border-2 rounded-md px-2"
            placeholder="Enter your message"
          />
          <button className="text-xl py-0.5 px-5 borderbtn w-fit mx-auto">
            <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Send
            </span>
          </button>
        </div>
      </footer>
    </main>
  );
}
