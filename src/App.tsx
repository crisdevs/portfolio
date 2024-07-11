import './styles/index.css'
import Intro from './sections/Intro';
import About from './sections/About';
import Projects from './sections/Projects';
import NavBar from './components/NavBar';
import {useState} from "react";
import { createContext } from 'react';

export const SectionContext = createContext("about");

function App() {
  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");
  console.log("app");
  window.onscroll = function(){
    let Y = window.scrollY;
    // console.log(Y);
    if(Y > 260){
      setShowNav(true);
      setCurrentSection("projects");
    }
    else{
      setShowNav(false);
      setCurrentSection("about");
    }
    console.log(window.scrollY);
  };
  
  return (

    <div className = "bg-[#111111] text-white font-main flex flex-col items-center lg:flex-row">
    <SectionContext.Provider value = {currentSection}>
    {showNav && <NavBar />}
    <Intro />
    <div className = "w-[85%] lg:w-[50%] lg:overflow-y-scroll">
      <About />
      <Projects />
    </div>
    </SectionContext.Provider>
    </div>
  )
}

export default App
