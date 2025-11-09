import { useState, useRef, useEffect } from "react";
import HomePage from "./Home";
import AboutPage from "./About"; 
import ServicesPage from "./Services";
import PortfolioPage from "./Portfolio";
import ContactPage from "./Contact";
import { AboutTeam } from "./AboutTeam";
import { AboutUs } from "./AboutUs";
import gsap from "gsap"; // Keep these imports here
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the pages list
const PAGES = [
    HomePage,
    AboutTeam,
    AboutUs,
    ServicesPage,
    PortfolioPage,
    ContactPage
];

// Register ScrollTrigger globally once
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function OneHome() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    
    // 🛑 REMOVE: currentPage and related logic are no longer needed 
    // to drive the scroll position, as native scrolling will handle it.
    
    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 🛑 REMOVE: The useEffects for handleWheel and container.scrollTo are removed 
    // so the user's scroll action drives the viewport movement.

    return (
        <div 
            ref={containerRef}
            // 💡 IMPORTANT: Added a stable class for the Scroller property in ScrollTrigger
            className={`
                main-horizontal-scroller 
                ${isMobile 
                    ? 'h-full w-full overflow-y-auto' 
                    : 'h-screen w-screen overflow-x-auto overflow-y-hidden flex '
                }
                scroll-smooth
            `}
            // Use style for critical CSS props that Tailwind doesn't handle natively
            style={isMobile ? {} : { scrollSnapType: 'x mandatory' }}
        >
            {PAGES.map((Component, index) => (
                <div 
                    key={index}
                    // 💡 Added a common class for all page sections
                    className={`page-section ${isMobile ? 'w-full h-auto' : 'min-w-full h-full'}`}
                    style={isMobile ? {} : { scrollSnapAlign: 'start' }}
                >
                    {/* ✅ ALL COMPONENTS ARE NOW MOUNTED SIMULTANEOUSLY */}
                    <Component />
                </div>
            ))}
        </div>
    );
}

