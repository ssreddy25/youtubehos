
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { isMenuClose } from '../utils/appSlice';

const Watch = () => {

    const[searchParm] = useSearchParams();

    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(isMenuClose())
    } ,[]);


  return (
    <div className="">
    
      <iframe width="800" height="415"  
      src={"https://www.youtube.com/embed/"+searchParm.get("v")+"?si=zjhA7izfbItARtct"}
      title="YouTube video player" frameborder="0" allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>

      </iframe>
    </div>
  )
}

export default Watch
