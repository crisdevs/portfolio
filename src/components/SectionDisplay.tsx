import { IoRemoveOutline } from "react-icons/io5";
import { useContext} from "react";
import { SectionContext} from "../App";

export default function SectionDisplay(){
    const currentSection = useContext(SectionContext);
    const selectedStyles = `bg-white text-black rounded transition-all duration-250 pl-[30px]`;
    const unSelectedStyles = `bg-transparent text-white transition-all duration-250 pl-[0px]`;
    const hoverStyles = `hover:bg-white hover:text-black hover:rounded hover:transition-all hover:duration-250 hover:pl-[30px]`;
    console.log(currentSection);
    return(
        <div>
            <ul className = "mt-[140px]">
                <li className = {`w-[50%] text-xl mb-[20px] ${currentSection === "about" ? selectedStyles : unSelectedStyles} ${hoverStyles}`}><a className= "flex items-center" href="#about"><IoRemoveOutline /> ABOUT</a></li>
                <li className = {`w-[50%] text-xl mb-[20px] ${currentSection === "projects" ? selectedStyles : unSelectedStyles} ${hoverStyles}`}><a className="flex items-center" href="#projects"><IoRemoveOutline /> PROJECTS</a></li>
                <li className = {`w-[50%] text-xl ${currentSection === "experience" ? selectedStyles : unSelectedStyles} ${hoverStyles}`}><a className="flex items-center" href="#experience"><IoRemoveOutline /> EXPERIENCE</a></li>
            </ul>
        </div>
    );
}