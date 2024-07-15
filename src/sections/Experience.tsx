import ExperienceEntry from "../components/ExperienceEntry"
import { experience } from "../Entries";
import useScreenSize from "../Hooks/useScreenSize";

export default function Experience(){
    const currentScreenSize = useScreenSize();
    return(
        <section id = "experience" className = "mt-[100px]">
            {currentScreenSize.width < 1024 && <h2 className = "mb-[50px]">EXPERIENCE</h2>}
            {experience.map((exp, i) => <ExperienceEntry key = {`exp-${i}`} experience = {exp}/>)}
        </section>
    );
}
