'use client'
import { ThemeProvider } from "next-themes";
import About from "./about/about";
import Footer from "./footer/footer";
import Header from "./header/header";
import Projects from "./sections/sections";

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
