import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

// Ensure registration is done here as well, just in case
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
} 


export default function PortfolioPage(){

    // 💡 Add a useGSAP block to ensure this page participates in the scroll timeline
    useGSAP(() => {
        
        const triggerElement = document.querySelector('.portfolio-page-container');
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

    return(
        <div className="w-screen h-screen flex justify-center items-center relative portfolio-page-container overflow-hidden">
            <img src="portfolio/CamStanding.svg" className=" w-[12rem] absolute bottom-[10%] left-[5%]"/>
            <div className="flex flex-col gap-8 items-center justify-center w-full">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="font-mediumText text-3xl w-fit">The Highlight Reel</p>
                    <p className="text-baseText text-lg w-fit">
                        Watch the magic we’ve captured.
                    </p>
                </div>  
                <div className="flex items-center justify-center w-full">

                    <div className="flex w-fit relative">
                        <div className="w-full h-full hover:cursor-pointer">
                            <img src="/portfolio/rectangle.png" className="h-[17rem] absolute left-4 bottom-[15%] "/>
                            <img src="/portfolio/arrow.png" className="h-24 absolute top-[35%] left-6"/>
                        </div>
                        <img src="/portfolio/main.png" className="w-[40rem] hover:cursor-pointer"></img>
                        <div className="w-full h-full  hover:cursor-pointer ">
                            <img src="/portfolio/rectangle.png" className="h-[17rem] absolute right-4 bottom-[15%] "/>
                            <img src="/portfolio/arrow.png" className="h-24 absolute top-[35%] right-6 rotate-180"/>
                        </div>
                    </div>
                </div>
            </div>
            <img src="FullHollowCirc.png" className="absolute -bottom-[35%] -right-[30%] w-[40rem]"/>
        </div>
    )
}