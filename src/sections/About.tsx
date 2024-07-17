import useScreenSize from "../Hooks/useScreenSize";
import me from "../assets/images/me.jpg"
export default function About (){
    const currentScreenSize = useScreenSize();
    return(
            <section id= "about" className = "mt-[50px] lg:w-[90%] lg:h-screen">
                {currentScreenSize.width < 1024 && <h2>ABOUT</h2>}
                {currentScreenSize.width >= 1024 && <img className = "w-[75%] rounded-md mx-auto" src= {me}/>}
                <p className = "mt-[20px]">Hello there, friend! I am a software engineer based in New York with a background in IT support and product testing.
                     I am passionate about creating impactful and visually stunning web applications. My technical expertise includes JavaScript, React, TypeScript, 
                     Redux, Styled-Components, Tailwind, and Git.
                   </p>
                   <p className = "mt-[20px]">
                   Some cool things I have done include automating testing processes with the power of JavaScript as a Senior Technician at Consumer Reports, 
                   creating a collaborative web application that helps people of all skill levels find their ideal plants, and developing a personal 
                   project to track guitar tunings for experimenting on the guitar.</p>
                   <p className = "mt-[20px]">In my free time, I love playing guitar and tackling exciting challenges in the world of video games, specifically the Souls series!</p>
                   
            </section>
    )
}