import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Tricks from "./components/Tricks";
import Picks from "./components/Picks";
import Media from "./components/Media";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/picks" element={<Picks />} />
          <Route path="/tricks" element={<Tricks />} />
          <Route path="/media" element={<Media />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </>
  );
};

export default App;
