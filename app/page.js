import About from "./about/page";
import Footer from "./footer/page";
import Header from "./header/page";
import Projects from "./sections/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
