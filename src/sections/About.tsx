import useScreenSize from "../Hooks/useScreenSize";

export default function About (){
    const currentScreenSize = useScreenSize();
    console.log(`This is the screen size: ${currentScreenSize.width}`);
    return(
            <section id= "about" className = "mt-[50px] lg:w-[90%] lg:h-screen">
                {currentScreenSize.width < 1024 && <h2>ABOUT</h2>}
                <img className = "w-[75%] rounded-md mx-auto" src="../src/assets/images/me.jpg"/>
                <p className = "mt-[20px]">Hello there friend! I am a software engineer based in New York who comes
                   from a background in IT support and product testing driven to make stunning, impactful
                   web applications. Technologies that I am proficient include Javascript, React, Typescript,
                   Redux, Styled-Components, Tailwind, and Git. 
                   </p>
                   <p className = "mt-[20px]">
                   Some cool things I have done are automate
                   testing process' with the power of Javascript as a Senior Technician at Consumer Reports,
                    Create a collaborative web application that help people of all skill level find their ideal plants, and create a personal 
                   project to help me keep track of guitar tunings when I want to experiment on guitar.</p>
                   <p className = "mt-[20px]">On my free time I love playing guitar and tackiling exciting challenges in the world of video games specifically the souls series!</p>
                   
            </section>
    )
}