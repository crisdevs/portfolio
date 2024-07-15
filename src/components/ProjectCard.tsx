import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Project } from "../types";

export default function ProjectCard (props:{project : Project}){
    console.log("project render");
    return(
        <div className = "mb-[40px] max-w-[275px]">
          <img className = "rounded-t-md h-[233px]" src = {props.project.imgPath} />
          <div className = " flex flex-col bg-[#191919] rounded-b-md h-[450px] p-[15px]">
          <h3 className = "text-2xl mb-[20px]">{props.project.title}</h3>
          <p>{props.project.description}</p>
          <ul className = "flex flex-wrap mt-auto justify-between h-[99px] items-center">
            {props.project.tech.map((technologies, i) => <li key = {`tech-${i}`}className = "border rounded p-[5px]">{technologies}</li>)}
          </ul>
            <div className = "flex justify-between mt-[40px]">
                {props.project.links.map((link, i) => {
                    if(i === 1){
                        return <a key = {`link-${i}`} className = " bg-[#96141a] p-[10px] flex items-center rounded" href = {link}> <CiGlobe className = "mr-[4px]"/> Live Site</a>
                    }
                    return (<a key={`link-${i}`} className = "bg-[#96141a] p-[10px] flex items-center br-[8px] rounded" href = {link}><FaGithub className = "mr-[4px]"/> Github</a>);
                })}             
            </div>
            </div>
        </div>
    );
}