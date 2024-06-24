
import './App.css'
// import PreLoader from './components/PreLoader'
import HomePage from './home'
import Footer from './home/layouts/Footer'
import Header from './home/layouts/Header'
import { useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState(0); 
  const sectionsRefs = useRef([]); 
  
  const scrollToSection = (index) => {
    setActiveSection(index);
    sectionsRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      {/* <PreLoader /> */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HomePage sectionsRefs={sectionsRefs} />
      <Footer />
    </>
  )
}

export default App
