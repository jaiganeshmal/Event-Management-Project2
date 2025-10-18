import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { Toaster } from "react-hot-toast";

// Lazy imports
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const Gallery = React.lazy(() => import("./Pages/Gallery"));
const Blogs = React.lazy(() => import("./Pages/Blogs"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const PageNotFound = React.lazy(() => import("./Components/PageNotFound"));

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

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500, // ✅ Toast auto-close time (1.5 seconds)
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
            padding: "20px 16px",
            fontSize: "14px",
          },
          success: {
            style: { background: "#1E2939" }, // green success
          },
          error: {
            style: { background: "#1E2939" }, // red error
          },
        }}
      />

    </BrowserRouter>
  );
};

export default App;
