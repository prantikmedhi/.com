import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-gray-900 font-sans selection:bg-secondary selection:text-gray-900">
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />

      <footer className="bg-gray-900 text-white py-12 px-4 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
          <p className="font-light tracking-widest uppercase text-sm">
            Studio Design &copy; {new Date().getFullYear()}
          </p>
          <div className="flex space-x-6 text-sm font-light">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">Pinterest</a>
            <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
