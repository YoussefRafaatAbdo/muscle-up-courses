// src/pages/Consultation.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Consultation() {
  return (
    <>
      <Navbar />
      <section className="page container">
        <h1>طلب استشارة</h1>

        <form className="form">
          <input type="text" placeholder="الاسم" />
          <input type="tel" placeholder="رقم الهاتف" />
          <textarea rows="5" placeholder="هدفك"></textarea>
          <button className="btn">إرسال</button>
        </form>
      </section>
      <Footer />
    </>
  );
}