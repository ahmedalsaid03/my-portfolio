import Navbar from './Components/Navbar';
import HomeContent from './Components/HomeContent';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import ThemeToggle from './Components/ThemeToggle';
import { ThemeProvider } from './store/myThemeContext';
import HeroSection from './Components/Hero';
import Contact from './Components/Contact';


function App()  {
  
  return (
    <>

      {/* <HeroSection/> */}
        <ThemeProvider>
        <ThemeToggle />
        <Navbar />
        <HomeContent />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact/>
        <Footer />
        {/* <Outlet/> */}
      </ThemeProvider>
    </>
  );
}

export default App
