
import Button from "./Button"

import { Link } from "react-router-dom"

const ButtonList = () => {

    const list =[
        "All","Biggbos","Java","Python","News",
        "All","Biggbos","Java","Python","News",
        "Songs","Movies","Lives","Comedy","Dance","Romance"

    ]
  return (
    <div className="overflow-x-scroll " >
     
        <div className="flex flex-wrap "> 
        {
        list.map((names,index)=>(

         <Link to="/"><Button key={index} name={names}/></Link>

        )

        )
}
        </div>
     
    </div>
  )
}

export default ButtonList
