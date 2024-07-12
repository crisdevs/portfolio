import { Project } from "./types"
import { ExperienceEntryType } from "./types"
import GreenPetsHome from "../src/assets/images/greenpets_home.png";
import TuningCollect from "../src/assets/images/tuningCollect.png";
import WatchDock from "../src/assets/images/watchDock.png";

export const projects : Project[] = [
    {
        title: "GreenPets",
        imgPath: GreenPetsHome,
        tech: ["React", "Typescript", "Redux", "Styled-Components"],
        description: "Answer a series of questions that will help you find a list of plants most ideal for you. The Perenual API was utilized for the plant data. ",
        links: ["https://greenpets.netlify.app/", "https://github.com/Los-Terremotos/GreenPets"]
    },
    {
        title: "Watchdock",
        imgPath: WatchDock,
        tech: ["React", "Typescript", "MUI", "Redux"],
        description: "A Docker Desktop extension that provide container and image metrics to developers. Some metrics this extension provide are CPU, Memory, and Disk I/O usage.",
        links:["https://github.com/oslabs-beta/Watchdock"]
    },
    {
        title: "Tuning Collect",
        imgPath: TuningCollect,
        tech: ["React", "Tailwind", "Express.js", "MongoDB"],
        description: "A CRUD web application that I use as my guitar tuning management tool. This application helps me keep track of the different guitar tunings I find interesting and what tuning each string should be in. ",
        links: ["https://github.com/crisdevs/Tuning_Collect"]
    }
];

export const experience : ExperienceEntryType[] = [
    {
        from: "Sep 2020",
        to: "Current",
        companyName:"Consumer Reports",
        role: "Senior Technician",
        details: ["Engineered a JavaScript-based automation solution to transfer data from Excel to web forms, reducing data entry errors and boosting testing efficiency by 70%.",
            "Tested TV products using internal Linux tools, educating over 6 million subscribers on data privacy and enhancing subscriber trust and engagement.",
            "Spearheaded the the documentation process of testing procedures, best practices, and troubleshooting processes decreasing onboarding time for new technicians by 50%.",
            "Led one-to-one and group training sessions for new technicians, which led to surpassing the on-time delivery goal, achieving over 90% in 2022 and 2023."
        ],
        skills: ["JavaScript", "Linux", "Microsoft Excel", "Product Testing", "Microsoft Excel", "Troubleshooting", "Project Management", "Documentation", "Employee Training"]
    },
    {
        from: "Oct 2019",
        to: "Aug 2020",
        companyName: "Tarrytech Computer Consultants",
        role: "Technical Support Engineer",
        details: ["Managed Datto’s backup server management portal to monitor and troubleshoot server backups leading to reduced server outages for over 90 businesses.",
            "Leveraged Windows 10 Active Directory for troubleshooting and resolving account-related issues, leading to a significant reduction in production downtime.",
            "Managed and updated internal troubleshooting documents which led to reduced time spent on tickets.",
            "Troubleshooted using Windows 10 networking commands to resolve server and networking issues, ensuring the uninterrupted day-to-day production of over 90 businesses."
        ],
        skills: ["Active Directory", "Customer Service", "Datto", "Software Troubleshooting", "Server backup management", "Microsoft Excel"]
    }
]

