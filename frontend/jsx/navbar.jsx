import React from 'react'
import {A} from 'hookrouter'

export default ({start, count, current})=>{
    let list = []
    if(start != "0"){   
        for(let i=1;i<=count;i++){
            list.push(
            <A  key={i} 
                className={i==current?"navbutton active":"navbutton"} 
                href = {"/"+start+"/"+i+"/"}>
                {i}
            </A>
            )
        }
    }
    return(
        <div className="navbar">
            {list}
        </div>
    )
}