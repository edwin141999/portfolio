'use client'
import { ThemeProvider } from "next-themes";
import About from "./about/page";
import Footer from "./footer/page";
import Header from "./header/page";
import Projects from "./sections/page";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
    <main className="min-h-screen flex flex-col items-center justify-between">
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
    </ThemeProvider>
  );
}
