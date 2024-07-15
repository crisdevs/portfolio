import {ExperienceEntryType} from "../types";

export default function ExperienceEntry(props:{experience:ExperienceEntryType}){
    const {from, to, companyName, role, details, skills} = props.experience;
    return(
    <div className = " mb-[50px]">
            <div>
            <h3 className = "text-xl">{`${role} - ${companyName}`}</h3>
            <p>{`${from} - ${to}`}</p>
            </div>
            <ul className = "list-disc">
                {details.map((detail, i) => <li className = "ml-[20px] mt-[10px]" key = {`detail-${i}`}>{detail}</li>)}
            </ul>
            <ul className = "flex mt-[20px] flex-wrap gap-y-3 ml-[20px]">
               {skills.map((skill, i) => <li className = "border rounded p-1 mr-[10px]" key={`skill-${i}`}>{skill}</li>)}
            </ul>
        
    </div>
    );
}