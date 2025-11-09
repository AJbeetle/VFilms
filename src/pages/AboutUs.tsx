
// -------------------------------------------- GSAP ANIMATION 1.0 version --------------------------------------------------------------------

// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger" 

// gsap.registerPlugin(ScrollTrigger);

// export function AboutUs(){
//     // useGSAP(()=>{
//     //     gsap.to("#imgToAn2",
//     //         {
//     //             x:-120,
//     //             repaet:-1,
//     //         }
//     //     )
//     //     gsap.to("#imgToAn3",
//     //         {
//     //             x:-220,
//     //         }
//     //     )
//     // },[])

//     useGSAP(() => {
//         // Create a Timeline to group the animations
//         const tl = gsap.timeline({
//             // Attach the ScrollTrigger to the Timeline
//             scrollTrigger: {
//                 // The element that triggers the animation (the main component container)
//                 trigger: ".about-us-container", 
                
//                 // Define where the trigger starts and ends relative to the viewport
//                 // 'top center' means: when the TOP of the trigger hits the CENTER of the viewport
//                 start: "top center", 
                
//                 // Optional: end the animation when the bottom of the trigger hits the top of the viewport
//                 end: "bottom top", 
                
//                 // Optional: Toggle classes to see when the trigger is active
//                 // toggleActions: "play none none reverse", 
//                 toggleActions: "play reset play reset",
                
//                 // Optional: Good for debugging to see the start/end markers
//                 // markers: true, 
//             }
//         });

//         // -----------------------------------------------------
//         // 1. Animation for the three paper images (moving into place)
//         // -----------------------------------------------------
        
//         // Define the initial state (FROM) before the scroll trigger hits
//         gsap.set(["#imgToAn2", "#imgToAn3"], { x: 0, opacity: 0 });
        
//         // Use .from() or .to() for the animation
//         tl.to("#imgToAn2", {
//             x: -120, // Final position
//             opacity: 1,
//             // repeat: -1, // Keep the repeat for the loop effect
//             yoyo: true, // A nice touch for repeating movement
//             duration: 2, 
//             ease: "power1.inOut" 
//         }, 0) 

//         tl.to("#imgToAn3", {
//             x: -220, // Final position
//             opacity: 1,
//             duration: 2, 
//             ease: "power1.inOut" 
//         }, 0) // Start both at the same time

//         // -----------------------------------------------------
//         // 2. Animate the headline and text (a fade-up effect)
//         // -----------------------------------------------------
        
//         // Select the content area
//         const content = gsap.utils.toArray(".about-content > div");

//         tl.from(content, {
//             y: 50,
//             opacity: 0,
//             stagger: 0.2, // Animate them one after another
//             duration: 1.5,
//             ease: "power2.out"
//         }, 0.5) // Start this group of animations slightly after the images start moving

//     }, []) // Empty dependency array means this runs only on mount.

//     return(
//         <div className="flex w-screen h-screen justify-end about-us-container">
//             <div className="flex flex-col w-[50%] items-center justify-endtext-center pt-[15rem] about-content">
//                 <div className="font-mediumFont text-[2rem] pb-10">
//                     A montage of familiar faces and names.
//                 </div>
//                 <div className="font-baseText text-[1rem] w-[60%]">
//                     Some stories come from the biggest names. Others begin with bold, rising voices.We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
//                 </div>
//                 <div className="flex relative h-full w-full">
//                     {/* <img src="/Paper1.svg" className="w-[20rem] absolute left-0 bottom-0 " id="imgToAn"/>
//                     <img src="/Paper2.svg" className="w-[20rem] absolute left-1/4 bottom-0" id="imgToAn"/>
//                     <img src="/Paper3.svg" className="w-[20rem] absolute left-1/2 bottom-0" id="imgToAn"/> */}
//                     <img src="/Paper1.svg" className="w-[20rem] " id="imgToAn1"/>
//                     <img src="/Paper2.svg" className="w-[20rem]" id="imgToAn2"/>
//                     <img src="/Paper3.svg" className="w-[20rem]" id="imgToAn3"/>
//                 </div>
//             </div>
//             <div className="flex flex-col w-[50%] items-center justify-between gap-10 pt-[10rem]">
//                 <div className="font-headingText text-6xl text-dark text-center mr-4">
//                     Every project is more than just a brief - it’s a new chapter waiting to be written. Together, we've crafted tales that inspire, connect, and endure.
//                 </div> 
                
//                 <div className="relative w-full h-full">
//                     <img src="/LogosCirc.png" className="w-[40rem] absolute -bottom-[90%] left-[9%] hover:rotate-180 transition-all duration-500"/>
//                     <img src="/Hill.svg" className="w-[25rem] absolute bottom-0 left-[25%] hillMoveup"/>
//                 </div>
//             </div>
//         </div>    
//     )
// }




// --------------------------------------------------------------NEW GSAP ANIMATIONS IN PAGE------------------------------------------------------------------------------------

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

// ScrollTrigger registration is handled in OneHome, but safe to keep here too
gsap.registerPlugin(ScrollTrigger); 

export function AboutUs(){
    
    useGSAP(() => {
        
        const triggerElement = document.querySelector('.about-us-container');
        const scrollerClass = ".main-horizontal-scroller"; 
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement, 
                horizontal: true, 
                scroller: scrollerClass, 
                start: "left right", // Start when the page enters from the right
                end: "right left",   // End when the page fully leaves on the left
                scrub: true, 
                id: "aboutus-animation" // Add unique ID to distinguish from routing triggers
                // markers: true,
            }
        });

        // -----------------------------------------------------
        // ENTRY ANIMATION (0 to 2 seconds in the timeline)
        // Paper Images: Spread Out (FROM) to Clustered (FINAL CSS Position)
        // -----------------------------------------------------

        // Initial State (Spread out and off-screen right)
        // Image 1 (imgToAn1) - The center reference point
        tl.from("#imgToAn1", { 
            x: 0, // Start far right
            opacity: 0, 
            duration: 1.5,
            ease: "power2.out"
        }, 0); 
        
        // Image 2 (imgToAn2) - Starts further right, moves left to stack
        // tl.from("#imgToAn2", { 
        //     x: 0, // Start even further right
        //     opacity: 0, 
        //     duration: 1.5,
        //     ease: "power2.out" 
        // }, 0); 

        // Image 3 (imgToAn3) - Starts right, moves left to stack
        // tl.from("#imgToAn3", { 
        //     x: 0, // Start furthest right
        //     opacity: 0, 
        //     duration: 1.5,
        //     ease: "power2.out" 
        // }, 0); 
        
        // Text Content (Fade and Slide Up)
        // const content = gsap.utils.toArray(".about-content > div");
        // tl.from(content, { 
        //     y: 50, 
        //     opacity: 0, 
        //     stagger: 0.2, 
        //     duration: 1.5, 
        //     ease: "power2.out" 
        // }, 0.5); 
        
        // Hill Image (Slide Up)
        // tl.from(".hillMoveup", {
        //     y: 50,
        //     opacity: 0,
        //     duration: 1.5,
        //     ease: "power2.out"
        // }, 0.8)

        // -----------------------------------------------------
        // EXIT ANIMATION (Starts at 4 seconds in the timeline)
        // Images: Clustered (FINAL CSS Position) to Off-Screen Left
        // -----------------------------------------------------
        
        // The numbers here need to be negative to push them off the screen to the left.
        
        // tl.to("#imgToAn1", { 
        //     x: 0, // Move left 
        // }); 
        
        tl.to("#imgToAn2", { 
            x: -520, // Move further left
            opacity: 1,
            // repeat: -1, // Keep the repeat for the loop effect
            yoyo: true, // A nice touch for repeating movement
            duration: 2, 
            ease: "power1.in" 
        },0); 
        
        tl.to("#imgToAn3", { 
            x: -1040, // Final position
            opacity: 1,
            duration: 2, 
            ease: "power1.in"
        }, 0) // Start both at the same time

        // // Fade out content as well
        // tl.to(content, { 
        //     y: -50, // Move content up as it exits
        //     opacity: 0, 
        //     stagger: -0.1, // Stagger backward
        //     duration: 1
        // }, 4.2); 

    }, []); 

    return(
        // 💡 Ensure the parent div for AboutUs has the trigger class
        <div className="flex w-screen h-screen justify-end about-us-container">
            <div className="flex flex-col w-[50%] items-center justify-end text-center pt-[15rem] about-content">
                <div className="font-mediumFont text-[2rem] pb-10">
                    A montage of familiar faces and names.
                </div>
                <div className="font-baseText text-[1rem] w-[60%]">
                    Some stories come from the biggest names. Others begin with bold, rising voices.We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
                </div>
                <div className="flex h-full w-full justify-end">
                    <div className="flex w-fit">
                        <img src="/Paper1.svg" className="w-[20rem] h-fit" id="imgToAn1"/>
                        <img src="/Paper2.svg" className="w-[20rem] h-fit" id="imgToAn2"/>
                        <img src="/Paper3.svg" className="w-[20rem] h-fit" id="imgToAn3"/>

                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[50%] items-center justify-between gap-10 pt-[10rem]">
                <div className="font-headingText text-6xl text-dark text-center mr-4">
                    Every project is more than just a brief - it’s a new chapter waiting to be written. Together, we've crafted tales that inspire, connect, and endure.
                </div> 
                
                {/* <div className="relative w-full h-full">
                    <img src="/LogosCirc.png" className="w-[40rem] absolute -bottom-[90%] left-[9%] hover:rotate-180 transition-all duration-500"/>
                    <img src="/Hill.svg" className="w-[25rem] absolute bottom-0 left-[25%] hillMoveup"/>
                </div> */}
                <div className="relative w-full h-full">
                    <img src="/LogosCirc.png" className="w-[40rem] lp:w-[2rem] absolute -bottom-[90%] left-[9%] hover:rotate-180 transition-all duration-500"/>
                    <img src="/Hill.svg" className="w-[25rem] lp:w-[50rem] absolute bottom-0 left-[25%] hillMoveup"/>
                </div>
            </div>
        </div>    
    )
}