import {AboutTeam} from "./AboutTeam"
import { AboutUs } from "./AboutUs"
import {useRef, useState,useEffect} from "react";

export default function About(){
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const isScrolling = useRef(false);
    const totalPages = 2;

    useEffect(() => {
      // Check if mobile on mount and resize
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);

      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Prevent multiple scrolls at once
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      
      // Scroll down (positive deltaY) = next page
      // Scroll up (negative deltaY) = previous page
      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        setCurrentPage(prev => prev + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      }
      
      // Reset scroll lock after animation
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isMobile, currentPage]);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;
    
    const container = containerRef.current;
    const pageWidth = container.offsetWidth;
    container.scrollTo({
      left: currentPage * pageWidth,
      behavior: 'smooth'
    });
  }, [currentPage, isMobile]);


    return (
    <div 
      ref={containerRef}
      className={`
 
        ${isMobile 
          ? 'h-full w-full overflow-y-auto' 
          : 'h-screen w-screen overflow-x-auto overflow-y-hidden flex'
        }
        scroll-smooth
      `}
      style={isMobile ? {} : { scrollSnapType: 'x mandatory' }}
    >
      <div 
        className={isMobile ? '' : 'min-w-full'}
        style={isMobile ? {} : { scrollSnapAlign: 'start' }}
      >
        <AboutTeam />
      </div>
      <div 
        className={isMobile ? '' : 'min-w-full'}
        style={isMobile ? {} : { scrollSnapAlign: 'start' }}
      >
        <AboutUs />
      </div>
    </div>
  );
}