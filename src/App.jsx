import Layout from './pages/Layout';
import Home from './pages/Home';
// import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/portfolio/'> {/* Adjust the base name to match your repo */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
    
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
