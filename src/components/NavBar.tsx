import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";



export default function NavBar(){
    return(
        <div className = "fixed bg-[#191919] w-full top-0 flex justify-center lg:hidden">
            <div className = "w-[85%] flex justify-evenly p-[10px]">
            <a href = "#"><FaArrowAltCircleUp  className = "text-[35px]"/></a>
            <a href = "https://github.com/crisdevs"><FaGithub className = "text-[35px]"/></a>
            <a href = "https://www.linkedin.com/in/criscorr/"><FaLinkedin className = "text-[35px]"/></a>
            <a href = "mailto:crisdevs95@gmail.com"><MdEmail className = "text-[35px]"/></a>
            </div>
        </div>
    );
}