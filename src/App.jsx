import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Tricks from "./components/Tricks";
import Picks from "./components/Picks";
import Media from "./components/Media";
import Why from "./components/Why";
// import WebRTCComponent from "./components/WebRTCComponent";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/* <Route path="/rtc" element={<WebRTCComponent />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/picks" element={<Picks />} />
          <Route path="/tricks" element={<Tricks />} />
          <Route path="/media" element={<Media />} />
          <Route path="/why" element={<Why />} />
          <Route path="/*" element={<Welcome />} />
        </Routes>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </>
  );
};

export default App;
