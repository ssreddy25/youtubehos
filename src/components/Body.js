import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer"
import Sidbar from "./Sidbar"

const Body =() =>{

    return (
        <div className="flex  col-span-10">
            <Sidbar/>
            <Outlet/>

        </div>
    )
}

export default Body;