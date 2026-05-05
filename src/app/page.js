import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
