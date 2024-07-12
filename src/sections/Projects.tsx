import ProjectCard from "../components/ProjectCard";
import useScreenSize from "../Hooks/useScreenSize";
import { projects } from "../Entries";

export default function Projects(){
    const currentScreenSize = useScreenSize();
 
    return(
        <section id ="projects" className = "mt-[100px] lg:w-[90%] lg:h-[100%]">
            {currentScreenSize.width < 1024 && <h2 className = "mb-[50px]">PROJECTS</h2>}
        <div className = "flex flex-col items-center md:flex-row md:flex-wrap md:justify-between lg:justify-center xl:justify-between xl:gap-[26px]">
        {projects.map((project, i) => <ProjectCard key = {`project-${i}`} project = {project} />)}
        </div>
        </section>
    );
}