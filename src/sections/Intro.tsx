import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionDisplay from "../components/SectionDisplay";
import useScreenSize from "../Hooks/useScreenSize";

export default function Intro (){
    const currentScreenSize = useScreenSize();
    return(
        <header className = "pt-[50px] w-[85%] lg:sticky lg:top-0 lg:left-[25px] lg:self-start lg:w-[50%] lg:flex lg:justify-center">
            <div>
            <h1 className = "text-5xl font-bold mb-[15px]">Cristian Corrales</h1>
            <h2 className = "font-medium text-2xl mb-[15px]" >Software Engineer</h2>
            <p className = "w-[90%]">Bringing my love for creativity and problem solving together!</p>
            <ul className = "flex justify-between mt-[20px] lg:justify-start">
                <li className = "text-[40px] mr-[20px] lg:mr-[50px] hover:text-[#96141a]"><a href = "https://github.com/crisdevs"><FaGithub /></a></li>
                <li className = "text-[40px] mr-[20px] lg:mr-[50px] hover:text-[#96141a]"><a href = "https://www.linkedin.com/in/criscorr/"><FaLinkedin /></a></li>
                <li className = "text-[40px] hover:text-[#96141a]" ><a href = "mailto:crisdevs95@gmail.com"><MdEmail /></a></li>
            </ul>
            {currentScreenSize.width >= 1024 && <SectionDisplay/>}
            </div>
        </header>
    )
}