import { Suspense } from 'react'
import './App.css'
import { lazy } from "react";
import { ImSpinner2 } from "react-icons/im";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MainLayout } from './pages/MainLayout';
import NotFound from "./pages/NotFound";


// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Services = lazy(() => import("./pages/Services"));
// const Portfolio = lazy(()=> import("./pages/Portfolio")); 
const OneHome = lazy(() => import("./pages/OneHome"));
const SuspenseLayout = () => (
  <Suspense fallback={<ImSpinner2 />}>
    <Outlet />
  </Suspense>
);

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route element={<SuspenseLayout/>}>
            {/* <Route path="/" element={<Home/>}/> */}

            {/* Routing when pages where not on horizontalScroll and GSAP was not introduced */}
            {/* <Route path="/" element={<OneHome/>}/>
            <Route path="/Home" element={<OneHome/>}/>
            <Route path="/AboutUs" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}></Route> */}

              {/* After GSAP routing */}
            <Route path="/" element={<OneHome/>}/>
            <Route path="/Home" element={<OneHome/>}/>
            <Route path="/AboutTeam" element={<OneHome/>}/>
            <Route path="/AboutUs" element={<OneHome/>}/>
            <Route path="/Contact" element={<OneHome/>}/>
            <Route path="/Services" element={<OneHome/>}/>
            <Route path="/Portfolio" element={<OneHome/>}></Route>

            
          </Route>
        </Route>
         {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
