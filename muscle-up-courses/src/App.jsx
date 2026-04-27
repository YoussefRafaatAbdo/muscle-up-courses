// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Transformations from "./pages/Transformations";
import Reviews from "./pages/Reviews";
import Consultation from "./pages/Consultation";
import Courses from "./pages/Courses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}