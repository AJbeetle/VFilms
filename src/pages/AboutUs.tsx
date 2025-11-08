export function AboutUs(){
    return(
        <div className="flex w-full h-full justify-end">
            <div className="flex flex-col w-[50%] items-center justify-endtext-center pt-[15rem]">
                <div className="font-mediumFont text-3xl pb-10">
                    A montage of familiar faces and names.
                </div>
                <div className="font-baseText text-xl w-[60%]">
                    Some stories come from the biggest names. Others begin with bold, rising voices.We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.
                </div>
                <div className="flex relative h-full w-full">
                    <img src="/Paper1.svg" className="w-[20rem] absolute left-0 bottom-0 "/>
                    <img src="/Paper2.svg" className="w-[20rem] absolute left-1/4 bottom-0"/>
                    <img src="/Paper3.svg" className="w-[20rem] absolute left-1/2 bottom-0"/>
                </div>
            </div>
            <div className="flex flex-col w-[50%] items-center justify-between gap-10 pt-[10rem]">
                <div className="font-headingText text-6xl text-dark text-center mr-4">
                    Every project is more than just a brief - it’s a new chapter waiting to be written. Together, we've crafted tales that inspire, connect, and endure.
                </div> 
                
                <div className="relative w-full h-full">
                    <img src="/LogosCirc.svg" className="w-[40rem] absolute bottom-0 left-[9%]"/>
                    <img src="/Hill.svg" className="w-[25rem] absolute bottom-0 left-[25%]"/>
                </div>
            </div>
        </div>    
    )
}