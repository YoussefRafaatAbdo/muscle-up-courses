// src/pages/Transformations.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Transformations() {
  return (
    <>
      <Navbar />
      <section className="page container">
        <h1>الإنجازات</h1>

        <div className="cards">
          <div className="card">قبل / بعد 1</div>
          <div className="card">قبل / بعد 2</div>
          <div className="card">قبل / بعد 3</div>
        </div>
      </section>
      <Footer />
    </>
  );
}