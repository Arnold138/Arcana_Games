import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Scenarios from './pages/Scenarios';
import CreateExperience from './components/createexperience'; 
import ContactSection from './components/contact';
import About from './components/about'; 

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/experience" element={<CreateExperience />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
