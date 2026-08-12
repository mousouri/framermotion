import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ClientLogos from './components/sections/ClientLogos';
import Showreel from './components/sections/Showreel';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Faq from './components/sections/Faq';
import CtaBanner from './components/sections/CtaBanner';

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Showreel />
        <Projects />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <Blog />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
