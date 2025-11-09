import { Suspense } from 'react'
import './App.css'
import { lazy } from "react";
import { ImSpinner2 } from "react-icons/im";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MainLayout } from './pages/MainLayout';
import NotFound from "./pages/NotFound";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(()=> import("./pages/Portfolio")); 

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
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutUs" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
          </Route>
        </Route>
         {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
