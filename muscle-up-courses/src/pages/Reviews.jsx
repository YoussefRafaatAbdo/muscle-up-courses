// src/pages/Reviews.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";
import reviews from "../data/reviews";

export default function Reviews() {
  return (
    <>
      <Navbar />
      <section className="page container">
        <h1>آراء العملاء</h1>

        <div className="cards">
          {reviews.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}