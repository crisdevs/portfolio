import {ExperienceEntryType} from "../types";

export default function ExperienceEntry(props:{experience:ExperienceEntryType}){
    const {from, to, companyName, role, details, skills} = props.experience;
    return(
    <>
            <p>{`${from} - ${to}`}</p>
            <h3>{`${role} - ${companyName}`}</h3>
            <ul>
                {details.map((detail, i) => <li key = {`detail-${i}`}>{detail}</li>)}
            </ul>
            <ul>
               {skills.map((skill, i) => <li key={`skill-${i}`}>{skill}</li>)}
            </ul>
        
    </>
    );
}