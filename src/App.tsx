import { Suspense, lazy } from "react";

import Loading from "./components/CutoutTextLoader";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Services/Services"));
const DragCards = lazy(() => import("./components/DragCards"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Team = lazy(() => import("./components/Team/Team"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs/WhyChooseUs"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <DragCards />
        <Portfolio />
        <Testimonials />
        <Team />
        <WhyChooseUs />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
