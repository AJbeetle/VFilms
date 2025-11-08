import { Suspense } from 'react'
import './App.css'
import { lazy } from "react";
import { ImSpinner2 } from "react-icons/im";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { MainLayout } from './pages/MainLayout';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Home"));

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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
