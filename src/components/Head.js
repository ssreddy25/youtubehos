import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";

import { YOUTUBE_AUTOSUGGEST_API } from "../constance";
import { Link } from "react-router-dom";



const Head =()=>{

    const[searchKey,setSearchKey]=useState("");
    const[sugeestdata,setSugeestdata]=useState([])
    const[showsuggestions,setShowsuggestions]=useState(false)

    const dispatch=useDispatch()

    const toggleMenus =()=>{
        dispatch(toggleMenu())
    }
    useEffect(()=>{
        getAutosuggest();
   },[searchKey])

   const getAutosuggest= async ()=>{
       const data = await fetch(YOUTUBE_AUTOSUGGEST_API+ searchKey)
       const json = await data.json()
        console.log(json[1])
        setSugeestdata(json[1])

   }
   
     //redirect("/result?search_query="+searchKey);
     
   
  
    return(
     <div className="grid grid-flow-col shadow-lg p-4"> 
        <div className="flex col-span-1 "> 
          <img  onClick={()=>toggleMenus()}className="h-8 cursor-pointer hover:bg-gray-500 " src="https://www.svgrepo.com/show/8109/menu-symbol-of-three-parallel-lines.svg" alt="hamburgar"/>
          <img className="h-8 ml-3 " src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpDEfEdyvOHyzDud8oy4HZvDh2Phf0IwwcQ&usqp=CAU" alt="youtube-logo"/>
        </div>
        <div className="col-span-10 text-center ">
            
        <div> 
        
         <input className="w-1/2 p-2  border border-solid  border-gray-500 rounded-l-full " 
         type="text" value={searchKey} 
         onChange={(e)=>setSearchKey(e.target.value)}
         onFocus={()=>setShowsuggestions(true)}
         onBlur={()=>setShowsuggestions(false)}
         />
        
          <button  className="border border-solid  border-gray-500 rounded-r-full p-2 "> 🔍</button>
          
           
          
         </div>
         
         { showsuggestions && (
         <div className="absolute px-3 py-2 w-5/12 mx-60 text-left bg-white rounded-lg shadow-lg ">
          {
            sugeestdata.map((data,index)=>(
                <ul>
               <li key={index}> 🔍{data}</li>
                </ul>
             ))
          }
           
         </div>
 )}
        </div>
        <div className="col-span-1 ">
         <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&usqp=CAU" alt="user-logo"/>
        </div>
     </div>
    )
}

export default Head;