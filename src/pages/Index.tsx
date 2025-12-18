import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Training />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
