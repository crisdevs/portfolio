export interface ExperienceEntryType {
    from: string,
    to:string,
    companyName: string,
    role: string,
    details: string[],
    skills: string[]
}

export interface Project {
    title: string,
    imgPath: string,
    tech: string[],
    description: string,
    links: string[]
}