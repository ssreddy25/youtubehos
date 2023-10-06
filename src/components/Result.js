import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResultVideos from "./ResultVideos";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_Result } from "../constance";

const Results = ()=>{

     //const[result]= useSearchParams();
     const[searchResultData,setSearchResultData]=useState([]);

     useEffect(()=>{

        resultData()
         
      },[])
 
      const resultData = async ()=>{
               
            const data =await fetch(YOUTUBE_SEARCH_Result);
            const json =await data.json();
            console.log("serach result")
           // console.log(json.items)
            setSearchResultData(json.items)
         
      }
       
    
    
    return (
        
            <div>
      
      {
       searchResultData.map((videos)=>(
                 
                       <div > 
                       <Link to={"/watch?v="+videos?.id?.videoId} >  <ResultVideos key={videos?.id?.videoId} info={videos}/> </Link> 
                       </div>
           ))
        
       }
         
    
        </div>
    )
}

export default Results;