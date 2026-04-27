// src/pages/Packages.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import packages from "../data/packages";

export default function Packages() {
  return (
    <>
      <Navbar />
      <section className="page container">
        <h1>الباقات</h1>

        <div className="cards">
          {packages.map((item) => (
            <PackageCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}