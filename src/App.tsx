import { useState } from 'react'
import './App.css'
import {HomePage} from './pages/Home';
import { NavBar } from './components/navBar';
function App() {

  return (
    <>
      <div className="m-0 p-0 h-full w-full">
      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center h-screen">
        <NavBar className="fixed top-0 right-0"/>
        <HomePage />
      </div>
      </div>

    </>
  )
}

export default App
