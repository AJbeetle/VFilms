import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomePage from "./Home";
import ServicesPage from "./Services";
import PortfolioPage from "./Portfolio";
import ContactPage from "./Contact";
import { AboutTeam } from "./AboutTeam";
import { AboutUs } from "./AboutUs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the pages list with their routes
const PAGES = [
    { component: HomePage, route: "/Home" },
    { component: AboutTeam, route: "/AboutTeam" },
    { component: AboutUs, route: "/AboutUs" },
    { component: ServicesPage, route: "/Services" },
    { component: PortfolioPage, route: "/Portfolio" },
    { component: ContactPage, route: "/Contact" }
];

// Register ScrollTrigger globally once
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function OneHome() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isNavigatingRef = useRef(false);
    
    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle route-based scrolling (when user navigates directly or uses browser back/forward)
    useEffect(() => {
        if (!containerRef.current || isMobile) return;

        const currentPageIndex = PAGES.findIndex(page => page.route === location.pathname);
        if (currentPageIndex === -1) return;

        const container = containerRef.current;
        const targetScroll = currentPageIndex * window.innerWidth;

        // Check if we need to scroll
        if (Math.abs(container.scrollLeft - targetScroll) > 10) {
            isNavigatingRef.current = true;
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });

            // Reset the flag after scrolling completes
            setTimeout(() => {
                isNavigatingRef.current = false;
            }, 1000);
        }
    }, [location.pathname, isMobile]);

    // Set up ScrollTriggers for route updates based on scroll position
    useEffect(() => {
        if (!containerRef.current || isMobile) return;

        const container = containerRef.current;
        
        // Clean up existing ScrollTriggers to avoid duplicates
        // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        ScrollTrigger.getAll().forEach(trigger => {

            if (trigger.vars.id?.startsWith('route-')) {

                trigger.kill();

            }

        });

        // Create ScrollTriggers for each page section
        PAGES.forEach((page, index) => {
            const section = container.querySelector(`.page-section-${index}`);
            if (!section) return;

            ScrollTrigger.create({
                trigger: section,
                scroller: container,
                horizontal: true,
                start: "left center", // When left edge of section hits center of viewport
                end: "right center",   // When right edge of section hits center of viewport
                onEnter: () => {
                    // Update route when scrolling forward into this section
                    if (!isNavigatingRef.current && location.pathname !== page.route) {
                        navigate(page.route, { replace: true });
                    }
                },
                onEnterBack: () => {
                    // Update route when scrolling backward into this section
                    if (!isNavigatingRef.current && location.pathname !== page.route) {
                        navigate(page.route, { replace: true });
                    }
                },
                id: `route-${index}`, // Add unique ID for selective cleanup
                // markers: true, // Uncomment for debugging
            });
        });

        return () => {
            // Cleanup on unmount or when dependencies change
            // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.id?.startsWith('route-')) {
                    trigger.kill();
                }
            });
        };
    }, [isMobile, navigate, location.pathname]);

    return (
        <div 
            ref={containerRef}
            className={`
                main-horizontal-scroller 
                ${isMobile 
                    ? 'h-full w-full overflow-y-auto' 
                    : 'h-screen w-screen overflow-x-auto overflow-y-hidden flex '
                }
                scroll-smooth
            `}
            style={isMobile ? {} : { scrollSnapType: 'x mandatory' }}
        >
            {PAGES.map((page, index) => {
                const Component = page.component;
                return (
                    <div 
                        key={index}
                        // Important: Add indexed class for ScrollTrigger targeting
                        className={`page-section page-section-${index} ${isMobile ? 'w-full h-auto' : 'min-w-full h-full'}`}
                        style={isMobile ? {} : { scrollSnapAlign: 'start' }}
                    >
                        <Component />
                    </div>
                );
            })}
        </div>
    );
}