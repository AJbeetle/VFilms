import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

// Ensure registration is done here as well, just in case
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}


export default function HomePage(){   
    // 💡 Add a useGSAP block to ensure this page participates in the scroll timeline
    useGSAP(() => {
        
        const triggerElement = document.querySelector('.home-page-container');
        const scrollerClass = ".main-horizontal-scroller"; 
        
        // This timeline doesn't do any animations, it just defines the scroll zone for this page
        gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement, 
                horizontal: true, 
                scroller: scrollerClass, 
                
                // Define the range of the HomePage.
                start: "left left", 
                end: "right left", 
                
                scrub: true, 
                // markers: true,
            }
        });

    }, []);

  return (
    <div className="w-screen h-screen p-24 flex items-center justify-between home-page-container">
        <div className="w-[40%] relative flex justify-center group">
            <div className="relative">
                <img src={"/chakraPattern.svg"} alt="chakra" className="animate-spin-slow-reverse" />
            </div>
            <div className="absolute top-1/3 flex items-center">
                <img src={"/logo.svg"} className="w-42 h-42"></img>
            </div>
        </div>  
        <div className="flex flex-col gap-14 justify-center items-center w-[60%]">
                <div>
                    <p className="font-headingText text-8xl text-[#0f3357] leading-none text-center">
                        Varnan is where stories find their voice and form
                    </p>
                </div>
                <div>
                    <p className="font-mediumText text-5xl text-primary">
                        Films . Brands . Arts
                    </p>
                </div>
                <div className="w-[60%]">
                    <p className="font-baseText text-lg text-center">
                        Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
    Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
    V doesn’t just tell stories - V honors them.
                    </p>   
                </div>
        </div>
    </div>
  );
};