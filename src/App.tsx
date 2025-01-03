import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team/Team";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}

export default App;
