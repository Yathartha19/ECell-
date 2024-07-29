import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from './components/Team';
import ScrollButton from './components/ScrollToTop';
import './components/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
      <ScrollButton />
    </Router>
  );
}

export default App;
