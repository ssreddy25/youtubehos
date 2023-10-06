
import React, { useEffect, useState } from 'react'

import { YOUTUBE_VIDEOS_API } from '../constance';

import VideosCard from './VideosCard';
import { Link } from 'react-router-dom';

const VideoContent = () => {

    const[videos,setVideos]=useState([])

    const getVideos = async()=>{
        const data =await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyC3ITiosQmZXfIf4kCPUamAZU9vbsqRnfI");
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
       }

 useEffect(()=>{
    getVideos()

 },[]);

 
  return (
    <div className='flex flex-wrap '>
      
   {
    videos.map((videos)=>(
              
                    <div > 
                    <Link to={"/watch?v="+videos.id} >  <VideosCard key={videos?.id} info={videos}/> </Link> 
                    </div>
        ))
     
    }
      
    </div>
  )
}

export default VideoContent
