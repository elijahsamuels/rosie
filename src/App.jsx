import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Tricks from "./components/Tricks";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/tricks" element={<Tricks />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
