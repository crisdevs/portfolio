import ExperienceEntry from "../components/ExperienceEntry"
import { experience } from "../Entries";

export default function Experience(){

    return(
        <section>
            {experience.map((exp, i) => <ExperienceEntry key = {`exp-${i}`} experience = {exp}/>)}
        </section>
    );
}
