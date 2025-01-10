import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/skill';
import Contact from './pages/Contact';
// import Project from './pages/Project';
import './customScrollbar.css'; // Import the custom scrollbar CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skill" element={<Skill />} />
          {/* <Route path="project" element={<Project />} /> */}
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
