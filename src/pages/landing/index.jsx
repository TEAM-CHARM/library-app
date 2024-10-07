import CTA from "./sections/CTA";
import Features from "./sections/Features";
import Footer from "./sections/footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Testimonial from "./sections/Testimonial";

const Landing = () => {
  return (
    <div>
      {/* ----NavBar-=--- */}
      <Navbar />
      {/* ----Hero section ---- */}
      <Hero />
      {/* ----FEature section--- */}
      <Features />
      {/* ---- Testimonial section---- */}
      <Testimonial />
      {/* --- Pricing Sections---- */}
      <Pricing />
      {/* ----Call to action section--- */}
      <CTA />
      {/* ----footer--- */}
      <Footer /> 
    </div>
  );
};

export default Landing;
