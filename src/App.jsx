import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './NavBar';
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import ProjectsPage from './ProjectsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <div className='main-content'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="about" element={<AboutMePage />}/>
        <Route path="projects" element={<ProjectsPage />}/>
        <Route path="services" element={<ServicesPage />}/>
        <Route path="contact" element={<ContactPage />}/>
      </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App
