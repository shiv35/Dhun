
import SideBar from "../sidebar/SideBar"
import Nav from "../nav/Nav"
import MusicBar from "../MusicBar/bottom"
import PrivateCom from "../PrivateCom"
import { Outlet } from "react-router-dom"
const MusicApp = () => {
   
    return (
        <div className=" max-w-screen h-screen bg-black">
            <div className=" h-[88%] w-full flex">
                <div className=" min-w-[20%] h-full m-0">
                    <SideBar/>
                </div>
                <div className="w-[80%] h-full flex flex-col ">
                    <div className="flex   h-[3rem] w-full">
                        <Nav />
                    </div>
                    <div className=" h-[94%] ">
                        <Outlet/>
                    </div>
                </div>
            </div>
            <div>
            <MusicBar   />
            </div>

        </div>
    )
}

export default MusicApp
