import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidbar =()=>{

    const isMenuOpen = useSelector((store)=>store.app.isOpenMenu);

    //Early return pattern
    //if(!isMenuOpen) return null;
    return !isMenuOpen ? (<div className="col-span-1 shadow-lg w-20 ml-2 p-2r ">
     <ul >
                <li className="cursor-pointer"><Link to="/">🏠<br/>Home</Link></li>
                <li>📹<br/>Short</li>
                <li>👍<br/>Subscription</li>
            </ul>
    </div>):
    (
        <div className="col-span-1 shadow-lg w-40"> 
            <ul>
            <li className="cursor-pointer"><Link to="/">🏠<br/>Home</Link></li>
                <li>Short</li>
                <li>Subscription</li>
            </ul>
           
           <div className="pt-4">
            
            <ul>
                <li>Library</li>
                <li>History</li>
                <li>Watch later</li>
                <li>👍🏿Likevideos</li>
            </ul>
           </div>
           <div>
            <h1 className="font-bold pt-4">expoler</h1>
            <ul>
                <li>📈Trending</li>
                <li>🛒shoping</li>
                <li>🎵music</li>
                <li>🔴live</li>
                <li>🎮game</li>
                <li>📰🗞️news</li>

                
            </ul>
           </div>
        </div>
    )
}

export default Sidbar