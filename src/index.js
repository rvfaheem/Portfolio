import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Page1 /> */}
    <Header />
    <Landing />
    <About />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
  </React.StrictMode>
);

