import ProjectCard from "../components/ProjectCard";
import GreenPetsHome from "../assets/images/greenpets_home.png";
import TuningCollect from "../assets/images/tuningCollect.png";
import WatchDock from "../assets/images/watchDock.png";
import useScreenSize from "../Hooks/useScreenSize";

    interface Project {
        title: string,
        imgPath: string,
        tech: string[],
        description: string,
        links: string[]
    }
export default function Projects(){
    const currentScreenSize = useScreenSize();
    const greenPets : Project = {
        title: "GreenPets",
        imgPath: GreenPetsHome,
        tech: ["React", "Typescript", "Redux", "Styled-Components"],
        description: "Answer a series of questions that will help you find a list of plants most ideal for you. The Perenual API was utilized for the plant data. ",
        links: ["https://greenpets.netlify.app/", "https://github.com/Los-Terremotos/GreenPets"]
    }
    const watchdock : Project = {
        title: "Watchdock",
        imgPath: WatchDock,
        tech: ["React", "Typescript", "MUI", "Redux"],
        description: "A Docker Desktop extension that provide container and image metrics to developers. Some metrics this extension provide are CPU, Memory, and Disk I/O usage.",
        links:["https://github.com/oslabs-beta/Watchdock"]
    }
    const tuningCollect : Project = {
        title: "Tuning Collect",
        imgPath: TuningCollect,
        tech: ["React", "Tailwind", "Express.js", "MongoDB"],
        description: "A CRUD web application that I use as my guitar tuning management tool. This application helps me keep track of the different guitar tunings I find interesting and what tuning each string should be in. ",
        links: ["https://github.com/crisdevs/Tuning_Collect"]
    }
    return(
        <section id ="projects" className = "mt-[100px] lg:w-[90%] lg:h-[100%]">
            {currentScreenSize.width < 1024 && <h2 className = "mb-[50px]">PROJECTS</h2>}
        <div className = "flex flex-col items-center md:flex-row md:flex-wrap md:justify-between lg:justify-center xl:justify-between xl:gap-[26px]">
        <ProjectCard project = {greenPets} />
        <ProjectCard project = {tuningCollect} />
        <ProjectCard project = {watchdock} />
        </div>
        </section>
    );
}