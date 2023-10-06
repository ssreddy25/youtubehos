import React from 'react'

const VideosCard = (props) => {

    //const {statistics ,id,title,snippet } =video;
   /// console.log(video.statistics)
  // console.log(info);
    
   //const {snippet,statistics}=info;
   // const{channelTitle, thumbnails}=snippet;
   const {info} =props;
  // console.log(info);
  return (
    
    <div className='p-2 m-2 shadow-lg w-72'>
      
      <img className='rounded-xl' alt="thumbnail" src={info?.snippet?.thumbnails?.medium?.url}/>
        <ul>
            <li className='font-bold'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics?.viewCount} views</li>
            
        </ul>
             </div>
  )
}

export default VideosCard
