import { NavBar } from "../components/navBar";
import { Outlet } from "react-router";

export function MainLayout(){
    return(
        <div className="m-0 p-0 h-full w-full">
            {/* Main Content */}
            <div className="relative flex flex-col items-center justify-center h-screen">
              <NavBar className="fixed top-0 right-0"/>
              <Outlet/>
            </div>
        </div>
    )
}