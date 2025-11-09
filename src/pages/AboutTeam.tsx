import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

// Ensure registration is done here as well, just in case
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}


export function AboutTeam(){

     // 💡 Add a useGSAP block to ensure this page participates in the scroll timeline
    useGSAP(() => {
        
        const triggerElement = document.querySelector('.aboutTeam-page-container');
        const scrollerClass = ".main-horizontal-scroller"; 
        
        // This timeline doesn't do any animations, it just defines the scroll zone for this page
        gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement, 
                horizontal: true, 
                scroller: scrollerClass, 
                
                // Define the range of the HomePage.
                start: "left right", 
                end: "right left", 
                
                scrub: true, 
                // markers: true,
            }
        });

    }, []);

    const navigate = useNavigate();
    return(
        <div className="flex w-screen h-screen justify-end aboutTeam-page-container">
            <div className="relative w-[30%] flex-col">
                <img src="/pinPaper.svg" className="w-[30rem] absolute -right-[15%] top-0"></img>
                <img src="/IGate.svg" className="w-[20rem] absolute left-0 bottom-10"></img>
                <img src="/Pin.png" className="w-[2rem] absolute top-0 right-0"></img>
               
            </div>
            <div className="relative flex flex-col w-[80%] gap-2 justify-end items-center  py-20 h-full"> 
                <div className="text-nowrap w-full text-center pr-40 font-headingText text-4xl text-dark">Film Makers</div>
                <div className="">
                    <img src="/arrowD.svg" className="w-[7rem] rotate-12"></img>
                </div>
                <div className="text-nowrap w-full text-end pr-24 font-headingText text-4xl text-dark">Art Curators</div>
                <div className="flex w-fit gap-10">
                    <div className=" w-fit flex items-end">
                        <img src="/arrowR.svg" className="w-[10rem] h-fit rotate-10"></img>
                    </div>

                    <div className="w-fit ">
                        <img src="/People.svg" className="w-[30rem]"></img>
                    </div>

                    <div className=" w-fit h-fit">
                        <img src="/arrowL.svg" className="w-[6rem] rotate-12"></img>
                    </div>

                </div>
                <div className="text-nowrap w-full pl-16  font-headingText text-4xl text-dark">Branding Experts</div>
                <div className="" >
                    <p className="font-mediumText text-xl w-fit">
                        Take a closer look at the stories V bring to life.
                    </p>
                </div>
                <div className="rounded-full bg-primary text-white px-4 py-2 active:scale-95" onClick={()=>navigate("/Portfolio")}>
                    <button type="button" className="flex items-center justify-center text-baseText text-xs leading-none ">
                        View Portfolio
                    </button>
                </div>
            </div>
        </div>    
    )
}