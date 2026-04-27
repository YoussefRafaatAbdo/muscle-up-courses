// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar container">
      <h2 className="logo">Muscle Up Team</h2>

      <div className="nav-links">
        <Link to="/">الرئيسية</Link>
        <Link to="/about">من نحن</Link>
        <Link to="/packages">الباقات</Link>
        <Link to="/transformations">الإنجازات</Link>
        <Link to="/reviews">الآراء</Link>
        <Link to="/courses">الدورات</Link>
        <Link to="/consultation">استشارة</Link>
      </div>
    </nav>
  );
}