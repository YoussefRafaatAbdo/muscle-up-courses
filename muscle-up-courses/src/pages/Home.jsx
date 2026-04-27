// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="page container">
        <h1>ابدأ رحلتك الآن</h1>
        <p>خطط تدريب، تغذية، متابعة، ونتائج حقيقية.</p>
      </section>
      <Footer />
    </>
  );
}