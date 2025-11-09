import type { ReactNode } from "react";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavBarPropsType{
    className?:string;
}

type navItemType = {
    text:string;
    url:string;
    style?:boolean;
    icon?:ReactNode;
}

const navItem : navItemType[] = [
    {
        text : "Services",
        url : "/Services"
    },
    {
        text: "Their Stories",
        url : "#"
    },
    {
        text : "Our Stories",
        url : "/AboutUs",
    },
    {
        text :  "Varnan",
        url : "/",
    },
    {
        text : "Let's Talk",
        url : "/Contact",
        icon : <MdMailOutline/>,
    },
    
    
    
]
export const NavBar = (props : NavBarPropsType ) => {
    const [navState, setNavState] = useState<boolean>(true);
    const navigate = useNavigate();

    return (
        <div className={`${props.className} bg-white w-full bg-opacity-35 py-5 px-6 flex items-end justify-between gap-2 transition-all duration-1000 z-10`}>
            <div className="py-1 hover:cursor-pointer active:scale-95" onClick={()=>navigate("/")}>
                <img src={"/logo.svg"} className="w-20 h-6"></img>
            </div>
             

            {
                navState ? 
                
                <div className="flex gap-2">
                    {
                        navItem.map((item:navItemType) => {
                            return(
                                <div 
                                    className={`hover:bg-primary hover:text-white hover:rounded-full px-4 py-1 flex items-center justify-center group hover:cursor-pointer active:scale-95 transition-all duration-300`}
                                    onClick={()=>navigate(item.url)}
                                >
                                    <p className="w-fit text-nowrap">{item.text}</p>
                                    {
                                            item.icon && <p className="ml-2 text-xl group-hover:w-full w-0 overflow-hidden transition-all  duration-300">{item.icon}</p>
                                    }
                                </div>    
                            )
                        }) 
                    }
                    <div className={``} onClick={()=>setNavState(t=>!t)}>
                        <p>
                            <img src={"/navOpen.svg"} className="w-8 h-8 hover:cursor-pointer active:scale-95"></img>
                        </p>
                    </div> 

                </div>

                :

                <div onClick={()=>setNavState(t=>!t)}>
                    <p className={``}>
                        <img src={"/navClose.svg"} className="w-8 h-8 hover:cursor-pointer active:scale-95"  ></img>
                    </p>
                </div>
            }
             
        </div>
    )
}