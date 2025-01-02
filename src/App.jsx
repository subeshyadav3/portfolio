// App.js
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/skill';
// import Project from './pages/Project';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Adjust the base name if required */}
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
