import {Routes, Route } from 'react-router-dom'

import About from './components/About'
import Welcome from './components/Welcome'
import Tricks from './components/Tricks'
import './App.css';



function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/tricks" element={<Tricks />} />
      <Route path="/" element={<Welcome />} />

      {/* <div className="App">hello</div> */}
    </Routes>
  );
}

export default App;
