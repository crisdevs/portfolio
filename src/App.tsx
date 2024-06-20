import './styles/index.css'
import Intro from './sections/Intro';
import About from './sections/About';
import Projects from './sections/Projects';
import NavBar from './components/NavBar';
import {useState} from "react";

function App() {
  const [showNav, setShowNav] = useState(false);
  console.log("re-render");
  window.onscroll = function(){
    let Y = window.scrollY;
    if(Y > 260){
      setShowNav(true);
    }
    else{
      setShowNav(false);
    }
    console.log(window.scrollY);
  };
  
  return (
    <div className = "bg-[#111111] text-white font-main flex flex-col items-center">
    {showNav && <NavBar />}
    <Intro />
    <About />
    <Projects />
    </div>
  )
}

export default App
