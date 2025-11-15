import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { Toaster } from "react-hot-toast";

// Lazy imports
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Gallery = React.lazy(() => import("./Pages/Gallery"));
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
          <Route path="/gallery" element={<Gallery />} />
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
