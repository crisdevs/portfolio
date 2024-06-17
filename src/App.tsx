import './styles/index.css'
import Intro from './sections/Intro';
import About from './sections/About';
import Projects from './sections/Projects';

function App() {

  return (
    <div className = "bg-[#111111] text-white font-main flex flex-col items-center">
    <Intro />
    <About />
    <Projects />
    </div>
  )
}

export default App
