import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

// Ensure registration is done here as well, just in case
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage(){
    // 💡 Add a useGSAP block to ensure this page participates in the scroll timeline
    useGSAP(() => {
        
        const triggerElement = document.querySelector('.service-page-container');
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

    return ( 
    <div className="w-screen h-screen flex items-center justify-center service-page-container">
        <p className="font-mediumText text-5xl font-bold text-dark">
            SERVICES PAGE UNDER DEVELOPMENT
        </p>
    </div>
    )
}