import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

// Lazy imports
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const Gallery = React.lazy(() => import("./Pages/Gallery"));
const Blogs = React.lazy(() => import("./Pages/Blogs"));
const Contact = React.lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Suspense for lazy-loaded pages */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
