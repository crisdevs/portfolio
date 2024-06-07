import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import "../styles/index.css";

export default function Intro (){
    return(
        <header className = "pt-[50px] w-[85%]">
            <h1 className = "text-3xl font-bold mb-[15px]">Cristian Corrales</h1>
            <h2 className = "font-medium text-xl mb-[15px]" >Front End Engineer</h2>
            <p>Bringing my love for creativity and problem solving together!</p>
            <ul className = "flex justify-evenly mt-[20px]">
                <li className = "text-[40px] mr-[20px]"><a href = "https://github.com/crisdevs"><FaGithub /></a></li>
                <li className = "text-[40px] mr-[20px]"><a href = "https://www.linkedin.com/in/criscorr/"><FaLinkedin /></a></li>
                <li className = "text-[40px]" ><a href = "mailto:crisdevs95@gmail.com"><MdEmail /></a></li>
            </ul>
        </header>
    )
}