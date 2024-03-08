import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Tricks from "./components/Tricks";
import Photos from "./components/Photos";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/tricks" element={<Tricks />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
