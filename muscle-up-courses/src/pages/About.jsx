// src/pages/About.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="page container">
        <h1>من نحن</h1>
        <p>
          فريق Muscle Up متخصص في بناء الأجسام، خسارة الدهون،
          وخطط التدريب الاحترافية.
        </p>
      </section>
      <Footer />
    </>
  );
}