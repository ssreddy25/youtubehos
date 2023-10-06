

const ResultVideos = ({info}) => {
    

  return (
    <div className="flex px-1 mx-1 p-1 m-1  shadow-lg space-x-2">
      <div >
        
        <img className="rounded-xl" alt="thumbainal" src={info?.snippet?.thumbnails?.medium?.url}/>
        <span></span>
      </div>
      <ul>
        
      <li className="font-semibold">{info?.snippet?.title}</li>
      <li className="font-black">{info?.snippet?.channelTitle} ✅</li>
      <li>{info?.snippet?.description}</li>
       
      </ul>
      <div>

      </div>
    </div>
  )
}

export default ResultVideos ;
