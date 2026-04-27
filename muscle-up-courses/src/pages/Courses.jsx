// src/pages/Courses.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import courses from "../data/courses";

export default function Courses() {
  return (
    <>
      <Navbar />
      <section className="page container">
        <h1>الدورات</h1>

        <div className="cards">
          {courses.map((item) => (
            <div className="card" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p style={{marginTop:'10px'}}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}